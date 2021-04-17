<script lang="ts">
  import { gsap } from 'gsap';

  const handleCardClick = (e: Event) => {
    const element = e.target as HTMLDivElement;
    element.classList.add('current');

    const tl = gsap.timeline();

    tl.to('.card:not(.current)', {
      duration: 0.2,
      opacity: 0,
    }).to(
      element,
      {
        duration: 1,
        width: '100vw',
        height: '100vh',
        x: 0,
        y: 0,
        position: 'fixed',
        autoRound: false,
        transformOrigin: '50% 50%',
        zIndex: '100',
        ease: 'expo.out',
        onComplete: () => {
          window.location.href = (element as HTMLElement).dataset.to;
        },
      },
      '-=0.1'
    );
  };

  export let to: string;
</script>

<div class="card" on:click={handleCardClick} data-to={to}>
  <slot />
</div>

<style>
  .card {
    @apply relative z-10 w-full sm:w-72 h-96 p-4 cursor-pointer rounded-sm bg-white shadow-sm hover:shadow-lg transition-shadow;
  }
</style>
