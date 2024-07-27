<template>
    <section class="bg-white p-8 shadow-md rounded-lg m-4">
        <h2 class="text-2xl font-bold mb-4">ÉTUDES</h2>
        <ul class="list-disc list-inside">
            <li>Licence en Génie Logiciel, Haute Ecole de Management et d'Informatique, 2019 - 2022</li>
            <li>Licence 2 en droit privé, Faculté des Sciences Juridiques et Politique de l'Université Cheikh Anta Diop,
                2018-2020</li>
            <li>Baccalauréat Série L2, Ecole Privée Thierno Cheikh, 2017 - 2018</li>
        </ul>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'EducationInfo'
});
</script>

<style scoped>
section {
    padding: 20px;
}
</style>