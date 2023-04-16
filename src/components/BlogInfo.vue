<template>
  <div
    v-for="i in 2"
    :key="i"
    class="
      shadow
      hover:shadow-lg
      bg-white
      rounded-xl
      overflow-hidden
      capitalize
      my-4
    "
  >
    <div class="p-4">
      <h3 class="text-lg font-semibold">
        how to write faster on keyboard with these amazing key shortcuts
      </h3>
      <p class="text-gray-700 text-base py-3 pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        molestiae natus culpa corrupti, consequuntur, veniam iusto sequi
        ratione, neque maiores est provident fugit magni vel magnam laborum quis
        non sed?
      </p>
      <p class="text-gray-400">
        23 may 2022
      </p>
    </div>
    <img
      class="h-72 w-full object-cover object-top"
      src="https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      alt=""
    >
  </div>
</template>

<script>
export default {
  name: 'BlogInfo',
};
</script>

<style>
</style>
