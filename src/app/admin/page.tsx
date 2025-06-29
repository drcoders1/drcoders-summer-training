"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  XCircle,
  Clock,
  Download,
  FileSpreadsheet,
  Trash2,
} from "lucide-react";

interface Student {
  id: number;
  course: string;
  name: string;
  email: string;
  semester: string;
  university: string;
  message?: string;
  paymentProof: string;
  finalPrice: number;
  discountApplied: boolean;
  promoCode?: string;
  status: string;
  createdAt: string;
}

export default function AdminPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("/api/enroll");
      const data = await response.json();

      if (response.ok) {
        setStudents(data.students);
      } else {
        setError(data.error || "Failed to fetch students");
      }
    } catch (error) {
      setError("Failed to fetch students");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (studentId: number, status: string) => {
    try {
      const response = await fetch(`/api/enroll/${studentId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        fetchStudents(); // Refresh the list
      } else {
        alert("Failed to update status");
      }
    } catch (error) {
      alert("Failed to update status");
    }
  };

  const exportToCSV = () => {
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
      ...students.map((student) =>
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

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `enrollments-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const exportToGoogleSheets = async () => {
    setExporting(true);
    try {
      const response = await fetch("/api/export-sheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ students }),
      });

      const result = await response.json();

      if (response.ok) {
        alert(`Data exported successfully! Sheet URL: ${result.sheetUrl}`);
        window.open(result.sheetUrl, "_blank");
      } else {
        alert(result.error || "Failed to export to Google Sheets");
      }
    } catch (error) {
      alert("Failed to export to Google Sheets");
    } finally {
      setExporting(false);
    }
  };

  const clearAllData = async () => {
    if (
      !confirm(
        "Are you sure you want to clear all enrollment data? This action cannot be undone.",
      )
    ) {
      return;
    }

    try {
      const response = await fetch("/api/enroll/clear", {
        method: "DELETE",
      });

      if (response.ok) {
        setStudents([]);
        alert("All data cleared successfully");
      } else {
        alert("Failed to clear data");
      }
    } catch (error) {
      alert("Failed to clear data");
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500">Approved</Badge>;
      case "rejected":
        return <Badge className="bg-red-500">Rejected</Badge>;
      default:
        return <Badge className="bg-yellow-500">Pending</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "rejected":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-yellow-500" />;
    }
  };

  const getStats = () => {
    const total = students.length;
    const pending = students.filter((s) => s.status === "pending").length;
    const approved = students.filter((s) => s.status === "approved").length;
    const rejected = students.filter((s) => s.status === "rejected").length;
    const totalRevenue = students
      .filter((s) => s.status === "approved")
      .reduce((sum, s) => sum + s.finalPrice, 0);

    return { total, pending, approved, rejected, totalRevenue };
  };

  const stats = getStats();

  if (loading) {
    return (
      <div className="bg-brand-primary min-h-screen p-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-brand-white text-center">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-brand-primary min-h-screen p-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center text-red-400">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-primary min-h-screen p-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-brand-white mb-2 text-3xl font-bold">
            Student Enrollments
          </h1>
          <p className="text-brand-grey">
            Manage student enrollment applications
          </p>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          <Card className="bg-brand-white-5 border-brand-white-10">
            <CardContent className="p-4">
              <div className="text-brand-white text-2xl font-bold">
                {stats.total}
              </div>
              <div className="text-brand-grey text-sm">Total Enrollments</div>
            </CardContent>
          </Card>
          <Card className="bg-brand-white-5 border-brand-white-10">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-yellow-400">
                {stats.pending}
              </div>
              <div className="text-brand-grey text-sm">Pending</div>
            </CardContent>
          </Card>
          <Card className="bg-brand-white-5 border-brand-white-10">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-400">
                {stats.approved}
              </div>
              <div className="text-brand-grey text-sm">Approved</div>
            </CardContent>
          </Card>
          <Card className="bg-brand-white-5 border-brand-white-10">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-red-400">
                {stats.rejected}
              </div>
              <div className="text-brand-grey text-sm">Rejected</div>
            </CardContent>
          </Card>
          <Card className="bg-brand-white-5 border-brand-white-10">
            <CardContent className="p-4">
              <div className="text-brand-sky-mint text-2xl font-bold">
                Rs {stats.totalRevenue}
              </div>
              <div className="text-brand-grey text-sm">Total Revenue</div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex flex-wrap gap-4">
          <Button
            onClick={exportToCSV}
            className="bg-brand-sky-mint hover:bg-brand-sky-mint-90 text-brand-primary"
          >
            <Download className="mr-2 h-4 w-4" />
            Export to CSV
          </Button>
          <Button
            onClick={exportToGoogleSheets}
            disabled={exporting}
            className="bg-green-600 hover:bg-green-700"
          >
            <FileSpreadsheet className="mr-2 h-4 w-4" />
            {exporting ? "Exporting..." : "Export to Google Sheets"}
          </Button>
          <Button
            onClick={clearAllData}
            variant="destructive"
            className="bg-red-600 hover:bg-red-700"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Clear All Data
          </Button>
        </div>

        <div className="grid gap-6">
          {students.map((student) => (
            <Card
              key={student.id}
              className="bg-brand-white-5 border-brand-white-10"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-brand-white text-xl">
                      {student.name}
                    </CardTitle>
                    <p className="text-brand-grey">{student.email}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(student.status)}
                    {getStatusBadge(student.status)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <p className="text-brand-grey text-sm">Course</p>
                    <p className="text-brand-white font-semibold">
                      {student.course}
                    </p>
                  </div>
                  <div>
                    <p className="text-brand-grey text-sm">University</p>
                    <p className="text-brand-white font-semibold">
                      {student.university}
                    </p>
                  </div>
                  <div>
                    <p className="text-brand-grey text-sm">Semester</p>
                    <p className="text-brand-white font-semibold">
                      {student.semester}
                    </p>
                  </div>
                  <div>
                    <p className="text-brand-grey text-sm">Final Price</p>
                    <p className="text-brand-white font-semibold">
                      Rs {student.finalPrice}
                    </p>
                  </div>
                  <div>
                    <p className="text-brand-grey text-sm">Discount Applied</p>
                    <p className="text-brand-white font-semibold">
                      {student.discountApplied ? "Yes" : "No"}
                    </p>
                  </div>
                  <div>
                    <p className="text-brand-grey text-sm">Applied On</p>
                    <p className="text-brand-white font-semibold">
                      {new Date(student.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {student.message && (
                  <div className="mb-4">
                    <p className="text-brand-grey text-sm">Message</p>
                    <p className="text-brand-white">{student.message}</p>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      onClick={() =>
                        window.open(student.paymentProof, "_blank")
                      }
                      className="bg-brand-sky-mint hover:bg-brand-sky-mint-90 text-brand-primary"
                    >
                      <Download className="mr-1 h-4 w-4" />
                      View Payment Proof
                    </Button>
                  </div>

                  {student.status === "pending" && (
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        onClick={() => updateStatus(student.id, "approved")}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => updateStatus(student.id, "rejected")}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        Reject
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}

          {students.length === 0 && (
            <Card className="bg-brand-white-5 border-brand-white-10">
              <CardContent className="py-8 text-center">
                <p className="text-brand-grey">No enrollments found</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
