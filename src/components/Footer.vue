<!-- eslint-disable vue/no-reserved-component-names -->
<template>
    <footer class="bg-gray-800 text-white p-8 text-center">
        <p>&copy; 2023 NDIAGA NDIAYE. Tous droits réservés.</p>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
    name: 'Footer'
});
</script>

<style scoped>
footer {
    text-align: center;
    padding: 20px;
    background-color: #f8f8f8;
}
</style>