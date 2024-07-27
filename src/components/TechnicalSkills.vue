<template>
    <section class="bg-white p-8 shadow-md rounded-lg m-4">
        <h2 class="text-2xl font-bold mb-4">COMPÉTENCES</h2>
        <div class="mb-4">
            <h3 class="text-xl font-semibold">Développement web</h3>
            <ul class="list-disc list-inside">
                <li>HTML, CSS, Bootstrap</li>
                <li>PHP, Laravel, MySQL</li>
                <li>JavaScript, Angular, React, Vue</li>
            </ul>
        </div>
        <div class="mb-4">
            <h3 class="text-xl font-semibold">Design</h3>
            <ul class="list-disc list-inside">
                <li>Photoshop, Illustrator, InDesign</li>
                <li>Figma, Adobe XD</li>
                <li>After Effect</li>
            </ul>
        </div>
        <div class="mb-4">
            <h3 class="text-xl font-semibold">Marketing digital</h3>
            <ul class="list-disc list-inside">
                <li>Référencement SEO & SEM</li>
                <li>Stratégie digital</li>
                <li>Content marketing</li>
            </ul>
        </div>
        <div class="mb-4">
            <h3 class="text-xl font-semibold">CMS</h3>
            <ul class="list-disc list-inside">
                <li>WordPress</li>
                <li>Drupal</li>
                <li>Prestashop</li>
            </ul>
        </div>
        <div>
            <h3 class="text-xl font-semibold">Autres</h3>
            <ul class="list-disc list-inside">
                <li>Analyse de données</li>
                <li>Gestion de projet informatique</li>
            </ul>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TechnicalSkills'
});
</script>

<style scoped>
section {
    padding: 20px;
}
</style>