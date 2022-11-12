<template>
  <div class="shadow bg-white rounded-xl overflow-hidden capitalize p-5 my-4">
    <h3 class="text-lg font-semibold">information</h3>
    <div class="flex w-full justify-between mt-4 text-base">
      <p class="text-gray-500">Location</p>
      <p>{{ info?.Location }}</p>
    </div>
    <div class="flex w-full justify-between mt-4 text-base">
      <p class="text-gray-500">Experience</p>
      <p>{{ info?.Experience }}</p>
    </div>
    <div class="flex w-full justify-between mt-4 text-base">
      <p class="text-gray-500">availability</p>
      <p>{{ info?.Availability }}</p>
    </div>
    <div class="flex w-full justify-between mt-4 text-base">
      <p class="text-gray-500">relocation</p>
      <p>{{ info?.Relocation }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationInfo",
  props: ["info"],
};
</script>

<style></style>
