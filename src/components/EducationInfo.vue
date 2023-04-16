<template>
  <div class="shadow bg-white rounded-xl overflow-hidden capitalize p-5 my-4">
    <h3 class="text-lg font-semibold">
      education
    </h3>
    <div class="py-5">
      <div
        v-for="i in 2"
        :key="i"
        class="mb-5 last:mb-0 last:border-none border-b-2"
      >
        <img
          class="h-20 w-20 rounded-xl"
          src="https://preview.launchoice.com/personal_cv/assets/img/avatar.jpg"
          alt=""
        >
        <h3 class="text-lg font-semibold">
          senior Developer
        </h3>
        <div class="py-2">
          <i class="not-italic ml-1">twitter</i>
          <i class="not-italic ml-1">london</i>
        </div>
        <div class="my-2">
          june 2019 - present
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationInfo',
};
</script>

<style>
</style>
