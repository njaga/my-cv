<template>
    <section class="p-10 max-w-6xl">
        <h2 class="text-4xl font-extrabold mb-10 text-indigo-800 relative inline-block">
            EXPÉRIENCES
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-indigo-500 rounded-full"></span>
        </h2>
        <div class="relative">
            <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-300"></div>
            <div v-for="(job, index) in jobs" :key="index" class="relative mb-16">
                <div class="flex items-center" :class="{ 'flex-row-reverse': index % 2 === 0 }">
                    <div class="flex-1" :class="{ 'text-right': index % 2 === 0 }">
                        <div :class="{ 'ml-auto mr-12': index % 2 === 0, 'mr-auto ml-12': index % 2 !== 0 }"
                            class="bg-white p-8 rounded-2xl shadow-lg inline-block transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <h3 class="font-bold text-2xl mb-2 text-indigo-700">{{ job.title }}</h3>
                            <p class="text-indigo-600 mb-2 font-semibold">{{ job.company }}</p>
                            <p class="text-sm text-gray-500 mb-4">{{ job.period }}</p>
                            <ul class="space-y-2 text-left">
                                <li v-for="(task, taskIndex) in job.tasks" :key="taskIndex" class="flex items-start">
                                    <span class="text-indigo-500 mr-2">&#8226;</span>
                                    <span>{{ task }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        class="w-16 h-16 absolute left-1/2 transform -translate-x-1/2 -translate-y-8 flex items-center justify-center bg-indigo-600 rounded-full text-white font-bold text-xl shadow-lg z-10 border-4 border-white">
                        {{ index + 1 }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
                        "Conception et développement d'applications sur mesure",
                        "Coordination de l'équipe marketing digital",
                        'Élaboration de stratégies digitales percutantes',
                        'Création de supports visuels captivants'
                    ]
                },
                {
                    title: 'Digital manager',
                    company: "Carré d'Or",
                    period: 'Mars 2023 - Mai 2024 (Free-lance)',
                    tasks: [
                        'Conception du logo et de la charte graphique',
                        'Conception et développement de site web',
                        "Conception et développement de l'application de gestion de l'entreprise immobilière"
                    ]
                },
                {
                    title: 'Stage en développement web',
                    company: "L'influent",
                    period: 'Février 2021 - Novembre 2021',
                    tasks: [
                        "Participation au projet de développement de site web et application web pour les clients de l'agence"
                    ]
                }
            ]
        }
    }
})
</script>
