import type { Component } from 'solid-js';
import { AppBar } from './apps/system/AppBar';
import { Desktop } from './apps/system/Desktop';
import { BaseWindow } from './components/window/Base';

export const App: Component = () => {
  return (
    <main className="w-screen h-screen overflow-hidden font-sans">
      <BaseWindow props={{}} />
      <Desktop />
      <AppBar />
    </main>
  );
};
