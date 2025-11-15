"use client";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit", form);
  }

  return (
    <section className="w-full py-10 sm:py-12 bg-white">
      <div
        className="
          w-full
          max-w-full
          mx-auto
          px-4 sm:px-6
          grid
          grid-cols-1
          lg:grid-cols-[48%_52%]
          gap-6 sm:gap-8
        "
      >
        {/* LEFT */}
        <div className="w-full lg:pr-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#1f2937] mb-4">
            Be Part of the Story
          </h2>

          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            Every voice matters. Every gesture adds to the harmony.
            <br />
            Join hands in amplifying values through art.
          </p>

          <form onSubmit={handleSubmit} className="w-full">
            {/* Inputs wider now */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full rounded-lg px-4 py-3 bg-gray-100"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full rounded-lg px-4 py-3 bg-gray-100"
              />
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={5}
              className="w-full rounded-lg px-4 py-3 bg-gray-100 mb-4"
            />

            <button
              type="submit"
              className="w-full sm:w-[180px] bg-[#00656D] hover:bg-[#005a58] text-white px-6 py-3 rounded-md transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* RIGHT - hidden on small screens, visible from lg and up */}
        <div className="w-full flex justify-center lg:justify-end items-start hidden lg:flex">
          <div
            className="
              w-full
              max-w-[600px]
              h-40 sm:h-52 md:h-[420px] lg:h-[540px]
              rounded-2xl bg-gray-200 shadow-lg
            "
          />
        </div>
      </div>
    </section>
  );
}
