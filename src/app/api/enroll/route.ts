import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { writeFile } from "fs/promises";
import { join } from "path";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form data
    const course = formData.get("course") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const semester = formData.get("semester") as string;
    const university = formData.get("university") as string;
    const message = formData.get("message") as string;
    const finalPrice = parseInt(formData.get("finalPrice") as string);
    const discountApplied = formData.get("discountApplied") === "true";
    const promoCode = formData.get("promoCode") as string;
    const paymentProofFile = formData.get("paymentProof") as File;

    // Validation
    if (
      !course ||
      !name ||
      !email ||
      !semester ||
      !university ||
      !paymentProofFile
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Check if student already exists with this email
    const existingStudent = await prisma.student.findFirst({
      where: { email },
    });

    if (existingStudent) {
      return NextResponse.json(
        { error: "A student with this email already exists" },
        { status: 409 },
      );
    }

    // Handle file upload
    let paymentProofPath = "";
    if (paymentProofFile) {
      const bytes = await paymentProofFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Create unique filename
      const timestamp = Date.now();
      const filename = `payment-proof-${timestamp}-${paymentProofFile.name}`;

      // Save to public/uploads directory
      const uploadsDir = join(process.cwd(), "public", "uploads");
      const filePath = join(uploadsDir, filename);

      try {
        await writeFile(filePath, buffer);
        paymentProofPath = `/uploads/${filename}`;
      } catch (error) {
        console.error("Error saving file:", error);
        return NextResponse.json(
          { error: "Failed to save payment proof" },
          { status: 500 },
        );
      }
    }

    // Save to database
    const student = await prisma.student.create({
      data: {
        course,
        name,
        email,
        semester,
        university,
        message: message || null,
        paymentProof: paymentProofPath,
        finalPrice,
        discountApplied,
        promoCode: promoCode || null,
        status: "pending",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Enrollment submitted successfully",
      studentId: student.id,
    });
  } catch (error) {
    console.error("Enrollment error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const students = await prisma.student.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ students });
  } catch (error) {
    console.error("Error fetching students:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
