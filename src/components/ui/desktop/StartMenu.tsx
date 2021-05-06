import type { Component } from 'solid-js';

export const StartMenu: Component = () => {
  return (
    <button className="relative w-12 p-2 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 !outline-none ">
      <img
        className="w-8 h-8 transform transition duration-300 pointer-events-none"
        src="/assets/system-svgs/menu.svg"
        alt="Start Menu"
      />
    </button>
  );
};
