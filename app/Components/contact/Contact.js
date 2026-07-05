import React from "react";
import { FiUser, FiMail, FiBook, FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-md lg:grid-cols-2">
          {/* LEFT SIDE (SOFT VERSION) */}
          <div className="flex flex-col justify-center bg-gray-100 p-12 text-gray-800 border-r border-gray-200">
            <p className="mb-3 uppercase tracking-[0.25em] text-xs text-gray-500">
              Contact
            </p>

            <h2 className="mb-5 text-3xl font-semibold leading-snug text-gray-900">
              Let's build something amazing.
            </h2>

            <p className="text-gray-600 leading-7">
              Have a project in mind, a question, or just want to connect? I’m
              always open to meaningful opportunities.
            </p>

            <div className="mt-8 space-y-2 text-sm text-gray-600">
              <p>📧 nirubhandari45@gmail.com</p>
              <p>📍 Australia</p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-10 md:p-12">
            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 text-sm outline-none transition focus:border-gray-400"
                  />
                </div>

                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 text-sm outline-none transition focus:border-gray-400"
                  />
                </div>
              </div>

              <div className="relative">
                <FiBook className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 text-sm outline-none transition focus:border-gray-400"
                />
              </div>

              <div className="relative">
                <FiMessageSquare className="absolute left-4 top-4 text-gray-400" />
                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 py-3 pl-12 pr-4 text-sm outline-none transition focus:border-gray-400"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gray-900 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
