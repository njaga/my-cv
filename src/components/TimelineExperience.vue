<!-- TimelineExperience.vue -->
<template>
    <section class="bg-white p-8 rounded-2xl shadow-xl">
        <h2 class="text-3xl font-bold mb-6 text-blue-800 relative">
            EXPÉRIENCES
            <span class="absolute bottom-0 left-0 w-20 h-1 bg-blue-500"></span>
        </h2>
        <div class="relative">
            <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div v-for="(job, index) in jobs" :key="index" class="relative mb-8"
                :class="{ 'text-right': index % 2 === 0 }">
                <div class="flex items-center" :class="{ 'flex-row-reverse': index % 2 === 0 }">
                    <div class="flex-1">
                        <div :class="{ 'ml-auto mr-8': index % 2 === 0, 'mr-auto ml-8': index % 2 !== 0 }"
                            class="bg-blue-100 p-6 rounded-lg shadow-md inline-block">
                            <h3 class="font-semibold text-xl mb-1">{{ job.title }}</h3>
                            <p class="text-gray-600 mb-2">{{ job.company }}</p>
                            <p class="text-sm text-gray-500 mb-3">{{ job.period }}</p>
                            <ul class="list-disc list-inside space-y-1 text-left">
                                <li v-for="(task, taskIndex) in job.tasks" :key="taskIndex">{{ task }}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 
                        flex items-center justify-center bg-blue-500 rounded-full text-white font-bold">
                        {{ index + 1 }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TimelineExperience',
    data() {
        return {
            jobs: [
                {
                    title: 'Chef de projet digital',
                    company: 'Vigilus Groupe SA',
                    period: 'Janvier 2022 - Mai 2024',
                    tasks: [
                        'Conception et développement de sites web',
                        'Conception et développement d\'applications sur mesure',
                        'Coordination de l\'équipe marketing digital',
                        'Élaboration de stratégies digitales percutantes',
                        'Création de supports visuels captivants'
                    ]
                },
                {
                    title: 'Digital manager',
                    company: 'Carré d\'Or',
                    period: 'Mars 2023 - Mai 2024 (Free-lance)',
                    tasks: [
                        'Conception du logo et de la charte graphique',
                        'Conception et développement de site web',
                        'Conception et développement de l\'application de gestion de l\'entreprise immobilière'
                    ]
                },
                {
                    title: 'Stage en développement web',
                    company: 'L\'influent',
                    period: 'Février 2021 - Novembre 2021',
                    tasks: [
                        'Participation au projet de développement de site web et application web pour les clients de l\'agence'
                    ]
                }
            ]
        };
    }
});
</script>