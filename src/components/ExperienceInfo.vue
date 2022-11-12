<template>
  <div class="shadow bg-white rounded-xl overflow-hidden capitalize p-5 my-4">
    <h3 class="text-lg font-semibold">experience</h3>
    <div class="py-5">
      <div
        v-for="i in 3"
        :key="i"
        class="mb-5 last:mb-0 last:border-none border-b-2"
      >
        <img
          class="h-20 w-20 rounded-xl"
          src="https://preview.launchoice.com/personal_cv/assets/img/avatar.jpg"
          alt=""
        />
        <h3 class="text-lg font-semibold">senior Developer</h3>
        <div class="py-2">
          <i class="not-italic ml-1">twitter</i>
          <i class="not-italic ml-1">london</i>
        </div>
        <i
          class="
            inline-block
            bg-indigo-100
            text-indigo-500
            p-1
            px-3
            m-1
            rounded-full
            not-italic
            capitalize
            font-semibold
            text-xs
          "
          >full Time</i
        >
        <div class="mt-2">june 2019 - present</div>
        <p class="text-gray-500 text-base py-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          molestiae natus culpa corrupti, consequuntur, veniam iusto sequi
          ratione, neque maiores est provident fugit magni vel magnam laborum
          quis non sed?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceInfo",
};
</script>

<style>
</style>