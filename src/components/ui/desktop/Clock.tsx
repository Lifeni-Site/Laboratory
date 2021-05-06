import { Component, createSignal, onCleanup } from 'solid-js';

export const Clock: Component = () => {
  const [time, setTime] = createSignal(new Date()),
    timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
  onCleanup(() => clearInterval(timer));

  return (
    <div className="flex flex-col items-center justify-center select-none">
      <time className="text-xl">
        {`${time().getHours()}:${time().getMinutes()}`}
      </time>
      <time className="text-md">{time().toLocaleDateString()}</time>
    </div>
  );
};
