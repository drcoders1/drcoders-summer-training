import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { students } = await request.json();

    // For now, we'll create a CSV download since Google Sheets API requires setup
    // In production, you'd integrate with Google Sheets API

    const headers = [
      "ID",
      "Name",
      "Email",
      "Course",
      "University",
      "Semester",
      "Final Price",
      "Discount Applied",
      "Promo Code",
      "Status",
      "Message",
      "Payment Proof",
      "Created At",
    ];

    const csvContent = [
      headers.join(","),
      ...students.map((student: any) =>
        [
          student.id,
          `"${student.name}"`,
          student.email,
          student.course,
          `"${student.university}"`,
          student.semester,
          student.finalPrice,
          student.discountApplied ? "Yes" : "No",
          student.promoCode || "",
          student.status,
          `"${student.message || ""}"`,
          student.paymentProof,
          new Date(student.createdAt).toLocaleDateString(),
        ].join(","),
      ),
    ].join("\n");

    // For now, return a success message with instructions
    // In a real implementation, you'd use Google Sheets API
    return NextResponse.json({
      success: true,
      message: "CSV data prepared successfully",
      csvContent: csvContent,
      note: "To integrate with Google Sheets, you need to set up Google Sheets API credentials",
    });
  } catch (error) {
    console.error("Export error:", error);
    return NextResponse.json(
      { error: "Failed to export data" },
      { status: 500 },
    );
  }
}
