import type { Component } from 'solid-js';

interface IAppIconProps {
  name: string;
  title: string;
}

export const AppIcon: Component<IAppIconProps> = (props) => {
  const { name, title } = props;

  return (
    <button className="group relative w-12 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 !outline-none hover:w-24 ">
      <img
        className="w-12 h-12 transform transition duration-300 group-hover:scale-175 group-hover:-translate-y-8 filter drop-shadow-lg"
        src={`/assets/app-icons/${name}.png`}
        alt={title}
      />
      <span className="absolute -bottom-2 text-md opacity-0 invisible whitespace-nowrap overflow-hidden transition duration-300 group-hover:opacity-100 group-hover:visible">
        {title}
      </span>
    </button>
  );
};
