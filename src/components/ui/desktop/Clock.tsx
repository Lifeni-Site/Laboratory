import { Component, createSignal, onCleanup } from 'solid-js';

export const Clock: Component = () => {
  const [time, setTime] = createSignal(new Date());

  const timer = setInterval(() => {
    const now = new Date();
    if (time().getMinutes() !== now.getMinutes()) {
      setTime(now);
    }
  }, 1000);

  onCleanup(() => clearInterval(timer));

  return (
    <div className="flex flex-col items-center justify-center select-none">
      <time className="text-xl">
        {`${
          time().getHours() < 10 ? '0' + time().getHours() : time().getHours()
        }:${
          time().getMinutes() < 10
            ? '0' + time().getMinutes()
            : time().getMinutes()
        }`}
      </time>
      <time className="text-md">{time().toLocaleDateString()}</time>
    </div>
  );
};
