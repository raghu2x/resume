<template>
  <router-view />
</template>

<script>
import "./tailwind.css";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
<style>
:-webkit-scrollbar {
  display: none;
}
</style>