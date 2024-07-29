<template>
    <section class="bg-white p-8 rounded-3xl shadow-2xl">
        <h2 class="text-4xl font-extrabold mb-10 text-indigo-800 relative inline-block">
            COMPÉTENCES
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-indigo-500 rounded-full"></span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(skill, index) in skills" :key="index" class="relative">
                <div class="w-full h-40 bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-r"
                        :class="gradientClasses[index % gradientClasses.length]" :style="{ width: `${skill.level}%` }">
                    </div>
                    <div class="relative z-10 h-full flex flex-col justify-center items-center p-4">
                        <span class="text-xl font-bold text-indigo-100 mb-2">{{ skill.name }}</span>
                        <span class="text-3xl font-extrabold text-white">{{ skill.level }}%</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SkillsChart',
    data() {
        return {
            skills: [
                { name: 'Développement Web', level: 95 },
                { name: 'Design', level: 85 },
                { name: 'Marketing Digital', level: 90 },
                { name: 'CMS', level: 80 },
                { name: 'Gestion de Projet', level: 85 }
            ],
            gradientClasses: [
                'from-indigo-300 to-indigo-400',
                'from-indigo-400 to-indigo-600',
                'from-indigo-500 to-indigo-700',
                'from-indigo-600 to-indigo-800',
                'from-indigo-800 to-indigo-950'
            ]
        };
    }
});
</script>

<style scoped>
@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }
}

.w-full:hover {
    animation: pulse 2s infinite;
}
</style>