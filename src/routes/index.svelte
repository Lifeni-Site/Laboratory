<script lang="ts">
</script>

<svelte:head>
  <title>实验室</title>
</svelte:head>

<main>
  <h1>Hello, Laboratory</h1>
</main>

<style>
  main {
    position: relative;
    width: 100%;
    min-height: 100vh;
    @apply mx-auto;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    user-select: none;
  }

  h1 {
    color: #000;
    font-size: 3.5rem;
    font-weight: 800;
    @apply leading-snug;
    @apply my-16 mx-auto;
  }

  @media (max-width: 648px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }
  }
</style>
