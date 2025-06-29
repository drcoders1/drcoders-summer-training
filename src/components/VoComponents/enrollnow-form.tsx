"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Sparkles, AlertCircle } from "lucide-react";
import clsx from "clsx";
import LiveCodeEditor from "./live-code-editor";

// Course Prices
const courses = {
  fullstack: { name: "Full Stack Development", price: 3000 },
  frontend: { name: "Frontend Development", price: 3000 },
  mobile: { name: "Mobile App Development", price: 3000 },
};

const semesters = [
  "1st Semester",
  "2nd Semester",
  "3rd Semester",
  "4th Semester",
  "5th Semester",
  "6th Semester",
  "7th Semester",
  "8th Semester",
];

const universities = [
  "University of Punjab",
  "University of Karachi",
  "LUMS",
  "FAST-NUCES",
  "COMSATS",
  "UET Lahore",
  "NUST",
  "IBA Karachi",
  "Bahria University",
  "Other",
];

interface FormData {
  course: string;
  name: string;
  email: string;
  semester: string;
  university: string;
  message: string;
  paymentProof: File | null;
}

interface FormErrors {
  course?: string;
  name?: string;
  email?: string;
  semester?: string;
  university?: string;
  paymentProof?: string;
  message?: string;
}

interface EnrollNowFormProps {
  onDirtyChange?: (isDirty: boolean) => void;
}

export default function EnrollNowForm({ onDirtyChange }: EnrollNowFormProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [finalPrice, setFinalPrice] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(false);
  const [promoError, setPromoError] = useState("");
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEdited, setHasEdited] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    course: "",
    name: "",
    email: "",
    semester: "",
    university: "",
    message: "",
    paymentProof: null,
  });

  const validPromo = "DRCODERS1000";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry!.isIntersecting && setIsVisible(true),
      {
        threshold: 0.1,
      },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (formData.course) {
      setFinalPrice(courses[formData.course as keyof typeof courses].price);
      setDiscountApplied(false);
      setPromoCode("");
      setPromoError("");
    }
  }, [formData.course]);

  // Call onDirtyChange when hasEdited changes
  useEffect(() => {
    if (onDirtyChange) onDirtyChange(hasEdited);
  }, [hasEdited, onDirtyChange]);

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.course) {
      errors.course = "Please select a course";
    }

    if (!formData.name.trim()) {
      errors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.semester) {
      errors.semester = "Please select your semester";
    }

    if (!formData.university) {
      errors.university = "Please select your university";
    }

    if (!formData.paymentProof) {
      errors.paymentProof = "Payment proof is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const applyPromo = () => {
    if (!formData.course) {
      setPromoError("Please select a course first");
      return;
    }

    if (!promoCode.trim()) {
      setPromoError("Please enter a promo code");
      return;
    }

    if (promoCode === validPromo && !discountApplied) {
      setFinalPrice((prev) => prev - 1000);
      setDiscountApplied(true);
      setPromoError("");
    } else if (discountApplied) {
      setPromoError("Promo code already applied");
    } else {
      setPromoError("Invalid promo code");
    }
  };

  // Mark as dirty on any field change
  const handleInputChange = (
    field: keyof FormData,
    value: string | File | null,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setHasEdited(true);
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    try {
      // Create FormData object
      const formDataToSend = new FormData();
      formDataToSend.append("course", formData.course);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("semester", formData.semester);
      formDataToSend.append("university", formData.university);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("finalPrice", finalPrice.toString());
      formDataToSend.append("discountApplied", discountApplied.toString());
      formDataToSend.append("promoCode", promoCode);

      if (formData.paymentProof) {
        formDataToSend.append("paymentProof", formData.paymentProof);
      }

      // Send to API
      const response = await fetch("/api/enroll", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit enrollment");
      }

      alert("Enrollment submitted successfully! We'll contact you soon.");

      // Reset form
      setFormData({
        course: "",
        name: "",
        email: "",
        semester: "",
        university: "",
        message: "",
        paymentProof: null,
      });
      setPromoCode("");
      setFinalPrice(0);
      setDiscountApplied(false);
      setPromoError("");
      setFormErrors({});
      setHasEdited(false);
      if (onDirtyChange) onDirtyChange(false);
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="enroll-now"
      ref={sectionRef}
      className="bg-brand-primary relative px-4 py-12 sm:py-20"
    >
      <div
        className={`mb-8 text-center transition-all duration-1000 sm:mb-16 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <h2 className="text-gradient-skymint-white mb-4 pb-4 text-2xl font-bold xs:text-3xl sm:text-4xl lg:text-5xl">
          Are you ready to Start Building?
        </h2>
        <p className="text-brand-grey mx-auto max-w-xs text-base xs:max-w-md xs:text-lg sm:max-w-2xl">
          Spots are limited and the journey begins soon. Enroll and secure your
          seat now.
        </p>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="grid min-h-[800px] grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column - Enrollment Form */}
          <div className="flex flex-col">
            <Card className="bg-brand-white-5 border-brand-white-10 flex-1 backdrop-blur-sm">
              <CardHeader>
                <CardTitle
                  className={`text-brand-white text-2xl font-bold transition-all duration-1000 sm:text-3xl ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  Enroll Now
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 sm:space-y-8">
                  {/* Course Select */}
                  <div
                    className={`space-y-2 transition-all duration-1000 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: "100ms" }}
                  >
                    <Label
                      htmlFor="course"
                      className="text-brand-white text-sm sm:text-base"
                    >
                      Select a Course *
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("course", value)
                      }
                    >
                      <SelectTrigger
                        className={clsx(
                          "bg-brand-white-10 border-brand-white-20 text-brand-white",
                          formErrors.course && "border-red-500",
                        )}
                      >
                        <SelectValue placeholder="Choose course" />
                      </SelectTrigger>
                      <SelectContent className="bg-brand-primary border-brand-white-20">
                        {Object.entries(courses).map(([key, course]) => (
                          <SelectItem
                            key={key}
                            value={key}
                            className="text-brand-white hover:bg-brand-sky-mint-20"
                          >
                            {course.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {formErrors.course && (
                      <div className="flex items-center space-x-1 text-sm text-red-400">
                        <AlertCircle className="h-4 w-4" />
                        <span>{formErrors.course}</span>
                      </div>
                    )}
                  </div>

                  {/* Personal Information */}
                  <div
                    className={`grid grid-cols-1 gap-4 transition-all duration-1000 sm:grid-cols-2 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: "200ms" }}
                  >
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-brand-white text-sm sm:text-base"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="John Doe"
                        className={clsx(
                          "bg-brand-white-10 border-brand-white-20 text-brand-white placeholder:text-brand-grey",
                          formErrors.name && "border-red-500",
                        )}
                      />
                      {formErrors.name && (
                        <div className="flex items-center space-x-1 text-sm text-red-400">
                          <AlertCircle className="h-4 w-4" />
                          <span>{formErrors.name}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-brand-white text-sm sm:text-base"
                      >
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="john@example.com"
                        className={clsx(
                          "bg-brand-white-10 border-brand-white-20 text-brand-white placeholder:text-brand-grey",
                          formErrors.email && "border-red-500",
                        )}
                      />
                      {formErrors.email && (
                        <div className="flex items-center space-x-1 text-sm text-red-400">
                          <AlertCircle className="h-4 w-4" />
                          <span>{formErrors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div
                    className={`grid grid-cols-1 gap-4 transition-all duration-1000 sm:grid-cols-2 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: "300ms" }}
                  >
                    <div className="space-y-2">
                      <Label
                        htmlFor="semester"
                        className="text-brand-white text-sm sm:text-base"
                      >
                        Current Semester *
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("semester", value)
                        }
                      >
                        <SelectTrigger
                          className={clsx(
                            "bg-brand-white-10 border-brand-white-20 text-brand-white",
                            formErrors.semester && "border-red-500",
                          )}
                        >
                          <SelectValue placeholder="Select semester" />
                        </SelectTrigger>
                        <SelectContent className="bg-brand-primary border-brand-white-20">
                          {semesters.map((semester) => (
                            <SelectItem
                              key={semester}
                              value={semester}
                              className="text-brand-white hover:bg-brand-sky-mint-20"
                            >
                              {semester}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {formErrors.semester && (
                        <div className="flex items-center space-x-1 text-sm text-red-400">
                          <AlertCircle className="h-4 w-4" />
                          <span>{formErrors.semester}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="university"
                        className="text-brand-white text-sm sm:text-base"
                      >
                        University *
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("university", value)
                        }
                      >
                        <SelectTrigger
                          className={clsx(
                            "bg-brand-white-10 border-brand-white-20 text-brand-white",
                            formErrors.university && "border-red-500",
                          )}
                        >
                          <SelectValue placeholder="Select university" />
                        </SelectTrigger>
                        <SelectContent className="bg-brand-primary border-brand-white-20">
                          {universities.map((university) => (
                            <SelectItem
                              key={university}
                              value={university}
                              className="text-brand-white hover:bg-brand-sky-mint-20"
                            >
                              {university}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {formErrors.university && (
                        <div className="flex items-center space-x-1 text-sm text-red-400">
                          <AlertCircle className="h-4 w-4" />
                          <span>{formErrors.university}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div
                    className={`space-y-2 transition-all duration-1000 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: "400ms" }}
                  >
                    <Label
                      htmlFor="promo"
                      className="text-brand-white text-sm sm:text-base"
                    >
                      Promo Code
                    </Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        id="promo"
                        value={promoCode}
                        onChange={(e) => {
                          setPromoCode(e.target.value);
                          setPromoError("");
                        }}
                        placeholder="Enter code"
                        className="bg-brand-white-10 border-brand-white-20 text-brand-white placeholder:text-brand-grey"
                        disabled={discountApplied}
                      />
                      <Button
                        type="button"
                        onClick={applyPromo}
                        disabled={discountApplied}
                        className="bg-brand-sky-mint hover:bg-brand-sky-mint-90 text-brand-primary px-4 text-sm font-semibold disabled:opacity-50"
                      >
                        {discountApplied ? "Applied" : "Apply"}
                      </Button>
                    </div>

                    {promoError && (
                      <div className="flex items-center space-x-1 text-sm text-red-400">
                        <AlertCircle className="h-4 w-4" />
                        <span>{promoError}</span>
                      </div>
                    )}

                    {discountApplied && (
                      <div className="flex animate-pulse items-center space-x-1 text-sm text-green-400">
                        <Sparkles className="h-4 w-4" />
                        <span>Congrats! ₹1000 discount applied.</span>
                      </div>
                    )}
                  </div>

                  {/* Dynamic Price Display */}
                  {formData.course && (
                    <div
                      className={clsx(
                        "text-brand-white text-lg font-semibold transition-all duration-700",
                        discountApplied ? "animate-bounce text-green-400" : "",
                      )}
                    >
                      Final Price: Rs {finalPrice}
                    </div>
                  )}

                  {/* Bank Details */}
                  <div
                    className={`bg-brand-white-10 border-brand-white-20 text-brand-white rounded-md border p-4 text-sm transition-all duration-1000 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: "500ms" }}
                  >
                    <p className="mb-1 font-semibold">Bank Details:</p>
                    <p>Account Title: Dr Coders</p>
                    <p>Account No: 1234567890</p>
                    <p>Bank: Meezan Bank</p>
                    <p>IBAN: PK00MEZN0000001234567890</p>
                  </div>

                  {/* Payment Proof Upload */}
                  <div
                    className={`space-y-2 transition-all duration-1000 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: "600ms" }}
                  >
                    <Label
                      htmlFor="screenshot"
                      className="text-brand-white text-sm sm:text-base"
                    >
                      Upload Payment Proof *
                    </Label>
                    <Input
                      type="file"
                      id="screenshot"
                      accept="image/*"
                      onChange={(e) =>
                        handleInputChange(
                          "paymentProof",
                          e.target.files?.[0] || null,
                        )
                      }
                      className={clsx(
                        "bg-brand-white-10 border-brand-white-20 text-brand-white",
                        formErrors.paymentProof && "border-red-500",
                      )}
                    />
                    {formErrors.paymentProof && (
                      <div className="flex items-center space-x-1 text-sm text-red-400">
                        <AlertCircle className="h-4 w-4" />
                        <span>{formErrors.paymentProof}</span>
                      </div>
                    )}
                  </div>

                  {/* Optional Message */}
                  <div
                    className={`space-y-2 transition-all duration-1000 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: "700ms" }}
                  >
                    <Label
                      htmlFor="message"
                      className="text-brand-white text-sm sm:text-base"
                    >
                      Message (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Tell us about your goals..."
                      className="bg-brand-white-10 border-brand-white-20 text-brand-white placeholder:text-brand-grey"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`bg-brand-sky-mint hover:bg-brand-sky-mint-90 text-brand-primary w-full py-2 text-sm font-semibold transition-all duration-1000 disabled:opacity-50 sm:text-base ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: "800ms" }}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Submitting..." : "Submit Enrollment"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Live Code Editor */}
          <div
            className={`flex flex-col transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="h-full min-h-[600px] lg:min-h-[800px]">
              <LiveCodeEditor selectedCourse={formData.course} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
