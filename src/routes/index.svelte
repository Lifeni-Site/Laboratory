<script lang="ts">
  import '../styles/global.less';
</script>

<svelte:head>
  <title>实验室</title>
</svelte:head>

<main>
  <h1>Hello, Laboratory</h1>
</main>

<style lang="less">
  :root {
    font-family: Overpass, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    position: relative;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
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
    line-height: 1.35;
    margin: 4rem auto;
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
