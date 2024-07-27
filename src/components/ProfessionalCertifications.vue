<template>
    <section class="bg-white p-8 shadow-md rounded-lg m-4">
        <h2 class="text-2xl font-bold mb-4">CERTIFICATIONS</h2>
        <ul class="list-disc list-inside">
            <li>Anglais Level B1 (British Council)</li>
            <li>Développement Front end (Force-N / UNCHK)</li>
            <li>Développement Mobile (Force-N / UNCHK)</li>
            <li>Data Analysis (Force-N / UNCHK)</li>
            <li>Commerce Digital (Force-N / UNCHK)</li>
            <li>Marketing Digital (Force-N / UNCHK)</li>
            <li>Analyste Cybersécurité (Force-N / UNCHK)</li>
        </ul>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProfessionalCertifications'
});
</script>

<style scoped>
section {
    padding: 20px;
}
</style>