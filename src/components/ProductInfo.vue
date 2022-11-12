<template>
  <div class="shadow bg-white rounded-xl overflow-hidden capitalize p-5 my-4">
    <h3 class="text-lg font-semibold">products</h3>
    <div class="py-5">
      <!-- {{ resume.information }} -->
      <div
        v-for="i in 2"
        :key="i"
        class="mb-5 last:mb-0 last:border-none border-b-2 p-2 pb-4"
      >
        <img
          class="h-20 w-20 rounded-xl"
          src="https://preview.launchoice.com/personal_cv/assets/img/avatar.jpg"
          alt=""
        />
        <h3 class="text-lg font-semibold">saaslabs</h3>
        <div class="pt-2 font-semibold flex items-center gap-4 text-gray-500">
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              ></path>
            </svg>
            <span class="ml-2">tools</span>
          </div>
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
            <span class="ml-2">founder</span>
          </div>
        </div>
        <p class="text-gray-500 text-base py-3 pb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          molestiae natus culpa corrupti, consequuntur, veniam iusto sequi
          ratione, neque maiores est provident fugit magni vel magnam laborum
          quis non sed?
        </p>
        <a
          class="
            border border-indigo-600
            hover:bg-indigo-600
            text-indigo-600
            hover:text-white
            p-2
            px-3
            w-full
            rounded-lg
            font-semibold
          "
          href="https://sapients.space"
          >https://sapients.space</a
        >
      </div>
    </div>
  </div>
</template>

<script>
// import { useResume } from "@/stores/resume";

// export default {
//   setup() {
//     const resume = useResume();

//     return {
//       resume,
//     };
//   },
// };
</script>