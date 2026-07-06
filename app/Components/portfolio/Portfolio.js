"use client";

import React, { useState } from "react";
import Menu from "./Menu";
import Image from "next/image";

const categories = ["Everything", "Applications", "Case Study", "Design"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Everything");

  const filteredItems =
    activeCategory === "Everything"
      ? Menu
      : Menu.filter((item) => item.category === activeCategory);

  return (
    <section id="work" className=" bg-gray-50 py-9">
      <div className="container mx-auto max-w-6xl px-4">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#6C63FF]">
            Selected Work
          </p>
          <h2 className="text-4xl font-bold">Recent Projects</h2>
        </div>

        {/* FILTERS */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-[#6C63FF] text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((elem, index) => {
              const { id, image, title, category, href } = elem;

              return (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  {/* IMAGE */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <Image src={image} alt="project" width={600} height={400} />
                    {/* subtle overlay */}
                    <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10"></div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <span className="text-xs uppercase tracking-wide text-gray-400">
                      {category}
                    </span>

                    <h3 className="mt-1 text-base font-semibold text-gray-800">
                      {title}
                    </h3>
                  </div>
                </a>
              );
            })}
          </div>
        ) : (
          <div className="py-16 text-center text-gray-400">
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
