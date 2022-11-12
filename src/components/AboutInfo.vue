<template>
  <div
    class="shadow text-base bg-white rounded-xl overflow-hidden capitalize p-5"
  >
    <h3 class="text-lg font-semibold">about me</h3>
    <div class="py-5 border-b">
      <p class="text-gray-500">
        {{ about?.description }}
      </p>
      <a
        class="text-indigo-600 block my-3 lowercase font-semibold"
        :href="`mailto:${about?.email}`"
      >
        {{ about?.email }}</a
      >

      <div>
        <a
          class="inline-flex text-white bg-slate-800 p-1 px-3 rounded-full ml-2"
          :href="about?.socialMedia?.facebook"
          >f
        </a>
        <a
          class="inline-flex text-white bg-slate-800 p-1 px-3 rounded-full ml-2"
          :href="about?.socialMedia?.twitter"
          >t</a
        >
        <a
          class="inline-flex text-white bg-slate-800 p-1 px-3 rounded-full ml-2"
          :href="about?.socialMedia?.github"
          >g</a
        >
      </div>
    </div>
    <div class="mt-4 font-semibold">
      <router-link
        class="relative hover:text-indigo-600 inline-block ml-4 after:content-[''] after:absolute after:-bottom-5 after:-left-0 after:w-full after:h-0.5 after:hidden after:bg-indigo-600 hover:after:block"
        to="/"
        >resume</router-link
      >
      <router-link
        class="relative hover:text-indigo-600 inline-block ml-4 after:content-[''] after:absolute after:-bottom-5 after:-left-0 after:w-full after:h-0.5 after:hidden after:bg-indigo-600 hover:after:block"
        to="/products"
        >products</router-link
      >
      <router-link
        class="relative hover:text-indigo-600 inline-block ml-4 after:content-[''] after:absolute after:-bottom-5 after:-left-0 after:w-full after:h-0.5 after:hidden after:bg-indigo-600 hover:after:block"
        to="/blogs"
        >blog</router-link
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  about: Object,
});
</script>
