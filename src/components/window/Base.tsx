import type { Component } from 'solid-js';

const defaultWindowProps: IBaseWindow = {
  app: 'default',
  name: 'default-window',
  title: 'Default Window',
  icon: '/assets/system-icons/window.png',
  minimize: false,
  maximize: false,
  styles: {
    left: '72px',
    top: '72px',
    'z-index': 100,
    width: '600px',
    height: '400px',
    'min-width': '400px',
    'min-height': '400px',
    resize: 'both',
  },
};

interface IBaseWindowProps {
  props: IBaseWindow;
}

export const BaseWindow: Component<IBaseWindowProps> = ({ props }) => {
  const windowProps = { ...defaultWindowProps, ...props };

  return (
    <div
      className={`fixed flex bg-white rounded-md overflow-hidden`}
      style={{ ...windowProps.styles }}
    >
      <div className="relative flex items-center justify-between w-full h-12 gap-4 bg-gray-100 overflow-hidden">
        <section className="flex items-center px-4 gap-4">
          <img src={windowProps.icon} alt="Window Icon" className="w-6 h-6" />
          <span className="text-md pointer-events-none select-none whitespace-nowrap">
            {windowProps.title}
          </span>
        </section>
        <section className="flex items-center">
          <button className="w-12 h-12 flex items-center justify-center !outline-none hover:bg-gray-200 transition">
            <img
              className="w-4 h-4 pointer-events-none"
              src="/assets/system-svgs/minimize.svg"
              alt="Minimize Button"
            />
          </button>
          <button className="w-12 h-12 flex items-center justify-center !outline-none hover:bg-gray-200 transition">
            <img
              className="w-4 h-4 pointer-events-none"
              src="/assets/system-svgs/maximize.svg"
              alt="Maximize Button"
            />
          </button>
          <button className="group w-12 h-12 flex items-center justify-center !outline-none hover:bg-red-500 transition">
            <img
              className="w-4 h-4 pointer-events-none group-hover:filter-invert"
              src="/assets/system-svgs/close.svg"
              alt="Close Button"
            />
          </button>
        </section>
      </div>
    </div>
  );
};
