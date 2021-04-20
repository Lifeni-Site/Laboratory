<script lang="ts" context="module">
  export const ssr = false;
</script>

<svelte:head>
  <title>Music | Space</title>
</svelte:head>

<main>
  <h1>Music</h1>
</main>

<style>
  main {
    @apply min-h-screen w-screen bg-white p-8;

    h1 {
      @apply text-2xl font-light font-sans;
    }
  }
</style>
