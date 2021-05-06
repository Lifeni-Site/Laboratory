import type { Component } from 'solid-js';

export const Wallpaper: Component = () => {
  return (
    <div className="w-screen h-screen">
      <img
        className="w-full h-full object-cover object-right select-none pointer-events-none"
        src="/images/default-wallpaper.webp"
        alt="Wallpaper"
      />
    </div>
  );
};
