<template>
    <section class="bg-white p-8 shadow-md rounded-lg m-4">
        <h2 class="text-2xl font-bold mb-4">Projets</h2>
        <div class="mb-4">
            <h3 class="text-xl font-semibold">Projet 1</h3>
            <p>Description du projet 1.</p>
        </div>
        <div class="mb-4">
            <h3 class="text-xl font-semibold">Projet 2</h3>
            <p>Description du projet 2.</p>
        </div>
        <div>
            <h3 class="text-xl font-semibold">Projet 3</h3>
            <p>Description du projet 3.</p>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Projects'
});
</script>

<style scoped>
section {
    padding: 20px;
}
</style>