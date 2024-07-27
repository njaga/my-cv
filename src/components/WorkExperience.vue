<template>
    <section class="bg-white p-8 shadow-md rounded-lg m-4">
        <h2 class="text-2xl font-bold mb-4">EXPÉRIENCES PROFESSIONNELLES</h2>
        <div class="mb-4">
            <h3 class="text-xl font-semibold">Chef de projet digital (CDI- Vigilus Groupe SA)</h3>
            <p class="text-gray-600">Janvier 2022 - Mai 2024</p>
            <ul class="list-disc list-inside">
                <li>Conception et développement de sites web : www.groupevigilus.com, www.vigilus-securite.com,
                    www.securiteincendie.sn, www.societe-monetique.com</li>
                <li>Conception et développement d'applications sur mesure : PEKHE, TBO, SANGOMAR, DEGGO</li>
                <li>Coordination de l'équipe marketing digital</li>
                <li>Élaboration de stratégies digitales percutantes</li>
                <li>Création de supports visuels captivants</li>
            </ul>
        </div>
        <div class="mb-4">
            <h3 class="text-xl font-semibold">Digital manager (Carré d'Or)</h3>
            <p class="text-gray-600">Mars 2023 - Mai 2024 (Free-lance)</p>
            <ul class="list-disc list-inside">
                <li>Conception du logo et de la charte graphique</li>
                <li>Conception et développement de site web : www.carredor.sn</li>
                <li>Conception et développement de l'application de gestion de l'entreprise immobilière</li>
            </ul>
        </div>
        <div>
            <h3 class="text-xl font-semibold">Stage en développement web (L'influent)</h3>
            <p class="text-gray-600">Février 2021 - Novembre 2021</p>
            <ul class="list-disc list-inside">
                <li>Participation au projet de développement de site web et application web pour les clients de l'agence
                </li>
            </ul>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'WorkExperience'
});
</script>

<style scoped>
section {
    padding: 20px;
}
</style>