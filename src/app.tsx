import type { Component } from 'solid-js';
import { AppBar } from './apps/system/AppBar';
import { Desktop } from './apps/system/Desktop';

export const App: Component = () => {
  return (
    <main className="w-screen h-screen overflow-hidden font-sans">
      <Desktop />
      <AppBar />
    </main>
  );
};
