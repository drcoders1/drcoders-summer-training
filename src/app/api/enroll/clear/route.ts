import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest) {
  try {
    // Delete all students
    await prisma.student.deleteMany({});

    return NextResponse.json({
      success: true,
      message: "All enrollment data cleared successfully",
    });
  } catch (error) {
    console.error("Clear data error:", error);
    return NextResponse.json(
      { error: "Failed to clear data" },
      { status: 500 },
    );
  }
}
