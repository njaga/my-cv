<!-- App.vue -->
<template>
  <div class="bg-gray-100 min-h-screen">
    <AppHeader />
    <div id="content" class="container mx-auto py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactInfo />
        <SkillsChart />
      </div>
      <TimelineExperience class="mt-16" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './components/AppHeader.vue';
import ContactInfo from './components/ContactInfo.vue';
import SkillsChart from './components/SkillsChart.vue';
import TimelineExperience from './components/TimelineExperience.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    ContactInfo,
    SkillsChart,
    TimelineExperience
  }
});
</script>