import React from "react";

const ScrollDown = () => {
  return (
    <div className="absolute bottom-10 left-0 w-full">
      <a href="#about" className="flex flex-col items-center">
        <span className="text-[length:var(--small-font-size)]">
          Scroll down
        </span>
        <span
          className="relative mx-auto mt-3 block h-[1.6rem] w-[1.25rem] rounded-2xl border-2"
          style={{ borderColor: "#454360" }}
        >
          <span
            className="absolute left-1/2 top-2 h-1 w-1 -translate-x-1/2 animate-mouse-wheel rounded-full"
            style={{ backgroundColor: "var(--title-color)" }}
          ></span>
        </span>
      </a>
    </div>
  );
};

export default ScrollDown;
