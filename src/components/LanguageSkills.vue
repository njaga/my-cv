<template>
    <section class="bg-white p-8 shadow-md rounded-lg m-4">
        <h2 class="text-2xl font-bold mb-4">LANGUES</h2>
        <ul class="list-disc list-inside">
            <li>Français (niveau académique)</li>
            <li>Anglais (niveau professionnel)</li>
            <li>Wolof (langue maternelle)</li>
        </ul>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LanguageSkills'
});
</script>

<style scoped>
section {
    padding: 20px;
}
</style>