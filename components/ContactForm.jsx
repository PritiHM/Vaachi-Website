"use client";
import { useEffect, useRef, useState } from "react";
import { Fraunces } from "next/font/google";
import Image from "next/image";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const overlayRef = useRef(null);
  const okButtonRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      alert("Please fill all required fields.");
      return;
    }

    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 600));
      setShowPopup(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } finally {
      setSubmitting(false);
    }
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setShowPopup(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (showPopup && okButtonRef.current) okButtonRef.current.focus();
  }, [showPopup]);

  function handleOverlayClick(e) {
    if (e.target === overlayRef.current) setShowPopup(false);
  }

  return (
    <section
      id="contact"
      className={`section ${fraunces.className} w-full mt-32 md:mt-10 lg:mt-20 sm:px-0 mb-4 md:mb-10 lg:mb-20`}
    >
      <div className="w-full max-w-7xl mx-auto md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-10 lg:mb-0">
          <Image
              src="/images/BePartOfStory2.png"
            alt="Contact Illustration Mobile"
            width={400}
            height={400}
            className="w-full object-contain block sm:hidden"
          />
          <Image
            src="/images/image(1).png"
            alt="Contact Illustration"
            width={500}
            height={500}
            className="object-contain w-full max-w-[450px] hidden sm:block"
          />
        </div>

        <div className="w-full lg:pr-10 order-2 lg:order-1">
          <h2 className="text-3xl sm:text-[32px] md:text-[36px] font-bold text-[#1f2937] mb-6 px-5">
            Be Part of the Story
          </h2>

          <p className="text-base sm:text-lg leading-[28px] text-gray-700 mb-10 px-5">
            Every voice matters. Every gesture adds to the harmony.
            <br />
            Join hands in amplifying values through art.
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full px-4 md:px-0 mt-3"
            aria-label="Contact form"
          >
            <div className="flex flex-col gap-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Name <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="
                      w-full rounded-lg px-4 py-4 
                      bg-[#ffffff] 
                      placeholder:text-base placeholder:text-[#6b7280]
                      focus:outline-none focus:ring-2 focus:ring-[#00656D]
                      border border-black/50
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Email <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="
                      w-full rounded-lg px-4 py-4 
                      bg-[#FFFFFF]
                      placeholder:text-base placeholder:text-[#6b7280]
                      focus:outline-none focus:ring-2 focus:ring-[#00656D]
                      border border-black/50
                    "
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Phone Number <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  required
                  aria-required="true"
                  className="
                    w-full rounded-lg px-4 py-4 
                    bg-[#ffffff]
                    placeholder:text-base placeholder:text-[#6b7280]
                    focus:outline-none focus:ring-2 focus:ring-[#00656D]
                    border border-black/50
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Message <span className="text-gray-400 text-sm">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="
                    w-full rounded-lg px-4 py-4 
                    bg-[#ffffff]
                    placeholder:text-base placeholder:text-[#6b7280]
                    focus:outline-none focus:ring-2 focus:ring-[#00656D]
                    border border-black/50
                  "
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="
                w-full sm:w-[180px] bg-[#00656D] hover:bg-[#005a58] text-[#F7F6F1]
                px-6 py-3 rounded-md transition 
                disabled:opacity-60 text-[16px] font-semibold
              "
            >
              {submitting ? "Please wait..." : "Submit"}
            </button>
          </form>
        </div>

        {showPopup && (
          <div
            ref={overlayRef}
            onClick={handleOverlayClick}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          >
            <div className="max-w-sm w-full bg-[#F7F6F1] rounded-2xl shadow-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-[#00656D]">Thank you!</h3>

              <p className="mt-2 text-gray-700">You are officially on the waitlist.</p>

              <button
                ref={okButtonRef}
                onClick={() => setShowPopup(false)}
                className="
                  mt-5 px-5 py-2 rounded-md bg-[#00656D] text-[#F7F6F1]
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00656D]
                "
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
