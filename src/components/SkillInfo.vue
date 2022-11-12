<template>
  <div class="shadow bg-white rounded-xl overflow-hidden capitalize p-5 my-4">
    <h3 class="text-lg font-semibold">skills</h3>
    <div class="py-5">
      <p
        v-for="skill in skills"
        :key="skill"
        class="
          inline-block
          bg-indigo-100
          text-indigo-500
          p-1
          px-3
          m-1
          rounded-full
          not-italic
          font-semibold
        "
      >
        {{ skill }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillInfo",
  props: ["skills"],
};
</script>

<style>
</style>