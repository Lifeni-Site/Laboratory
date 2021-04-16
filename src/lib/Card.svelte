<script lang="ts">
  import { gsap } from 'gsap';

  const handleCardClick = (e: Event) => {
    const element = e.target as Element;

    gsap.to(element, {
      duration: 0.8,
      width: '100vw',
      height: '100vh',
      x: 0,
      y: 0,
      autoRound: false,
      transformOrigin: '50% 50%',
      position: 'fixed',
      zIndex: '100',
      ease: 'expo.out',
    });
  };
</script>

<div class="card" on:click={handleCardClick}>
  <slot />
</div>

<style>
  .card {
    @apply w-full sm:w-72 h-96 p-4 rounded-sm bg-white shadow-sm hover:shadow-lg transition-shadow;
  }
</style>
