<script lang="ts">
  import Card from '$lib/Card.svelte';
  import { gsap } from 'gsap';
  import { onMount } from 'svelte';

  onMount(() => {
    gsap.from('.card', {
      duration: 0.5,
      x: 5,
      scaleY: 0.95,
      rotateY: '45deg',
      transformOrigin: 'bottom left',
      perspective: 2000,
      opacity: 0,
      stagger: {
        from: 'start',
        amount: 0.15,
      },
      onStart: () => {
        document.querySelector('main').classList.add('show');
      },
    });
  });
</script>

<svelte:head>
  <title>Space</title>
</svelte:head>

<main>
  <Card to="/music">
    <h2>Music</h2>
  </Card>
  <Card to="/timeline">
    <h2>Timeline</h2>
  </Card>
</main>

<style>
  main {
    @apply w-full p-4 flex items-center justify-center gap-4 md:gap-6 flex-wrap opacity-0;

    :global(&.show) {
      @apply opacity-100;
    }
  }
</style>
