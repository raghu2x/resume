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
        {{ about?.email }}
      </a>

      <div>
        <a
          v-for="(acc, i) of about.socialMedia"
          :key="i"
          class="text-indigo-600 mx-2 text-lg"
          :href="acc.link"
        >
          <i :class="acc.icon" />
        </a>
      </div>
    </div>
    <div class="mt-4 font-semibold">
      <router-link
        class="relative hover:text-indigo-600 inline-block ml-4 after:content-[''] after:absolute after:-bottom-5 after:-left-0 after:w-full after:h-0.5 after:hidden after:bg-indigo-600 hover:after:block"
        to="/"
      >
        resume
      </router-link>
      <router-link
        class="relative hover:text-indigo-600 inline-block ml-4 after:content-[''] after:absolute after:-bottom-5 after:-left-0 after:w-full after:h-0.5 after:hidden after:bg-indigo-600 hover:after:block"
        to="/products"
      >
        products
      </router-link>
      <router-link
        class="relative hover:text-indigo-600 inline-block ml-4 after:content-[''] after:absolute after:-bottom-5 after:-left-0 after:w-full after:h-0.5 after:hidden after:bg-indigo-600 hover:after:block"
        to="/blogs"
      >
        blog
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  about: {
    type: Object,
    default() {
      return {};
    },
  },
});
</script>
