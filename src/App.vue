<!-- App.vue -->
<template>
  <div class="bg-gray-100 min-h-screen">
    <AppHeader />
    <div id="content" class="container mx-auto py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactInfo />
        <SkillsChart />
      </div>
      <LanguageSkills class="mt-14" />
      <TimelineExperience class="mt-14" />
      <ProfessionalCertifications class="mt-14" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './components/AppHeader.vue';
import ContactInfo from './components/ContactInfo.vue';
import SkillsChart from './components/SkillsChart.vue';
import TimelineExperience from './components/TimelineExperience.vue';
import ProfessionalCertifications from './components/ProfessionalCertifications.vue'
import LanguageSkills from './components/LanguageSkills.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    ContactInfo,
    SkillsChart,
    TimelineExperience,
    ProfessionalCertifications,
    LanguageSkills,
  }
});
</script>