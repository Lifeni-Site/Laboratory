import type { Component } from 'solid-js';
import { AppIcon } from '../../components/ui/desktop/AppIcon';
import { Clock } from '../../components/ui/desktop/Clock';
import { StartMenu } from '../../components/ui/desktop/StartMenu';

export const AppBar: Component = () => {
  return (
    <div className="fixed left-0 bottom-0 p-6 w-full z-10000">
      <div className="flex items-center justify-between w-full px-6 py-4 bg-white bg-opacity-25 backdrop-filter backdrop-blur rounded-3xl gap-6">
        <section className="flex items-center justify-center">
          <StartMenu />
        </section>
        <section className="flex items-center justify-center gap-6">
          <AppIcon name="explorer" title="File Explorer" />
          <AppIcon name="chrome" title="Chrome" />
          <AppIcon name="music-player" title="Music Player" />
          <AppIcon name="notepad" title="Notepad" />
        </section>
        <section className="flex items-center justify-center">
          <Clock />
        </section>
      </div>
    </div>
  );
};
