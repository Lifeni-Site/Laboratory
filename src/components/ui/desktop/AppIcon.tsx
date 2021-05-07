import type { Component } from 'solid-js';

interface IAppIconProps {
  name: string;
  title: string;
}

export const AppIcon: Component<IAppIconProps> = ({ name, title }) => {
  return (
    <button className="group relative w-12 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 !outline-none hover:w-24 ">
      <img
        className="w-12 h-12 transform transition filter drop-shadow-md duration-300 pointer-events-none group-hover:scale-175 group-hover:-translate-y-10 group-hover:drop-shadow-lg"
        src={`/assets/app-icons/${name}.png`}
        alt={title}
      />
      <span className="absolute -bottom-1 text-md opacity-0 invisible whitespace-nowrap overflow-hidden transition duration-300 group-hover:opacity-100 group-hover:visible">
        {title}
      </span>
    </button>
  );
};
