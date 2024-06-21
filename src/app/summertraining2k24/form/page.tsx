"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState, useRef, FormEvent } from "react";

const ContactForm = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Message, setMessage] = useState("");

  const [isSending, setIsSending] = useState(false);
  const isSubmitDisabled =
    !FirstName || !LastName || !Email || !PhoneNumber || !Message;

  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      className="flex items-center justify-center bg-transparent py-[40px] md:py-[120px]"
      id="contForm"
    >
      <div className="flex  w-[850px] flex-col items-center justify-center ">
        <div className="flex flex-col items-center">
          <h1 className="text-newGreen mb-5 text-center text-2xl font-bold leading-[50px] md:text-[40px]">
            Get in Touch
          </h1>
          <p className="text-regularText text-center md:w-auto">
            Building Relationships through Exceptional Service.
          </p>
        </div>

        <form className="mt-10 w-full px-5" onSubmit={sendEmail} ref={form}>
          <div className="mb-5 flex flex-col items-center gap-5 sm:flex-row md:mb-[30px] md:gap-[30px]">
            <div className="flex w-full flex-col gap-[10px]">
              <label htmlFor="f-name" className="text-regularText">
                First Name
              </label>
              <Input
                type="text"
                id="f-name"
                name="mail_first_name"
                className="border-borderGray w-full rounded-[5px] border bg-transparent p-4"
                placeholder="First Name"
                autoComplete="off"
                required
                value={FirstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="flex w-full flex-col gap-[10px]">
              <label htmlFor="l-name" className="text-regularText">
                Last Name
              </label>
              <Input
                type="text"
                id="l-name"
                name="mail_last_name"
                className="border-borderGray w-full rounded-[5px] border bg-transparent p-4"
                placeholder="Last Name"
                autoComplete="off"
                required
                value={LastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mb-5 flex flex-col items-center gap-5 sm:flex-row md:mb-[30px] md:gap-[30px]">
            <div className="flex w-full flex-col gap-[10px]">
              <label htmlFor="u-email" className="text-regularText">
                Email
              </label>
              <Input
                type="email"
                required
                id="u-email"
                name="mail_email"
                className="border-borderGray w-full rounded-[5px] border bg-transparent p-4"
                placeholder="Email"
                autoComplete="off"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex w-full flex-col gap-[10px]">
              <label htmlFor="number" className="text-regularText">
                Phone
              </label>
              <Input
                type="text"
                id="number"
                name="mail_phone"
                className="border-borderGray w-full rounded-[5px] border bg-transparent p-4"
                placeholder="Phone"
                autoComplete="off"
                required
                value={PhoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mb-5 flex flex-col gap-[10px]">
            <label htmlFor="message" className="text-regularText">
              Message
            </label>
            <Textarea
              id="message"
              name="mail_message"
              className="border-borderGray w-full rounded-[5px] border bg-transparent p-4"
              placeholder="Enter your message..."
              autoComplete="off"
              required
              rows={5}
              value={Message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              value="Send"
              disabled={isSubmitDisabled}
              className={`bg-newGreen border-borderGreen rounded-full border px-6 py-3 text-center font-semibold text-transparent ${
                isSubmitDisabled ? "opacity-50" : ""
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
        {/*  messege box shown from top when you hit submit button  */}
      </div>
    </section>
  );
};

export default ContactForm;
