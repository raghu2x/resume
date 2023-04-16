<template>
  <div class="bg-gray-50 p-4">
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-6 max-w-5xl mx-auto"
    >
      <!-- left layout  -->
      <div class="col-span-1">
        <ProfileInfo :profile="user?.PersonalInfo" />
        <InformationInfo :info="user?.information" />
        <SkillInfo :skills="user?.skills" />
      </div>
      <!-- right layout  -->
      <div class="col-span-2">
        <AboutInfo :about="user?.about" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileInfo from 'components/ProfileInfo.vue';
import InformationInfo from 'components/InformationInfo.vue';
import AboutInfo from 'components/AboutInfo.vue';
import SkillInfo from 'components/SkillInfo.vue';
import user from '../data.json';

</script>
