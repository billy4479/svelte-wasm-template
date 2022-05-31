<script lang="ts">
  import Greeter from './greeter.svelte';
  import init, { greet } from 'my-crate';
  import { onMount } from 'svelte';

  let counter = 0;

  onMount(async () => {
    await init();
  });

  function handleClick() {
    counter++;
    greet();
  }
</script>

<Greeter who="world" />

<button
  on:click={handleClick}
  class="bg-red rounded border border-black p-2 m-10"
  >Button clicked {counter} times</button
>

<style>
</style>
