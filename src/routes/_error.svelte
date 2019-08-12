<script>
  export let status;
  export let error;
</script>

<style>
  h1 {
    color: #333;
    font-size: 1.5rem;
  }
</style>

<svelte:head>
  <title>{status}</title>
</svelte:head>
<h1>Error: {status} - {error.message}</h1>
