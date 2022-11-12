<template>
  <div class="shadow bg-white rounded-xl overflow-hidden mb-4">
    <div class="bg-red-200 h-24"></div>
    <div class="relative p-5">
      <img
        class="h-20 w-20 rounded-lg absolute -top-10 left-4 z-30"
        :src="profile?.img"
        alt="img for name"
      />
      <i
        class="absolute right-4 bg-indigo-600 text-white p-1 px-3 rounded-full not-italic uppercase text-xs"
        >Busy</i
      >
      <div class="py-5">
        <h3 class="text-lg font-semibold mt-5">{{ profile?.name }}</h3>
        <p class="text-gray-500">{{ profile?.title }}</p>
      </div>
      <button
        class="bg-indigo-500 hover:bg-indigo-600 text-white p-2 w-full rounded"
      >
        Download CV
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "profileInfo",
  props: ["profile"],
};
</script>

<style></style>
