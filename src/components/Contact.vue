<template>
    <section class="bg-white p-8 shadow-md rounded-lg m-4">
        <h2 class="text-2xl font-bold mb-4">Contact</h2>
        <ul class="list-disc list-inside">
            <li>Téléphone : +221 78 163 34 19</li>
            <li>Email : contact@ndiagandiaye.com</li>
            <li>Site web : www.ndiagandiaye.com</li>
            <li>LinkedIn : https://www.linkedin.com/in/ndiagandiaye/</li>
            <li>Adresse : Scat Urbam, Dakar</li>
        </ul>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Contact'
});
</script>

<style scoped>
section {
    padding: 20px;
}
</style>