import type { Component } from 'solid-js';
import { Clock } from '../../components/ui/desktop/Clock';

export const AppBar: Component = () => {
  return (
    <div className="fixed left-0 bottom-0 p-6 w-full z-10000">
      <div className="flex items-center justify-between w-full px-6 py-4 bg-white bg-opacity-25 backdrop-filter backdrop-blur rounded-2xl">
        <section>
          <h1 className="text-2xl font-sans">AppBar</h1>
        </section>
        <section></section>
        <section>
          <Clock />
        </section>
      </div>
    </div>
  );
};
