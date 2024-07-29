<template>
    <section class="p-8 bg-gradient-to-r from-indigo-100 to-indigo-50">
        <h2 class="text-4xl font-extrabold mb-10 text-indigo-800 relative inline-block">
            CERTIFICATIONS
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-indigo-500 rounded-full"></span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(cert, index) in certifications" :key="index"
                class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between transform hover:scale-105">
                <div>
                    <div class="w-24 h-24 mb-4 mx-auto flex items-center justify-center">
                        <i :class="cert.icon" class="bi text-4xl text-indigo-600"></i>
                    </div>
                    <h3 class="text-xl font-bold text-indigo-800 mb-2 text-center">{{ cert.name }}</h3>
                    <p class="text-indigo-600 text-center">{{ cert.issuer }}</p>
                </div>
                <div class="mt-4 pt-4 border-t border-indigo-200 text-center">
                    <span
                        class="inline-block bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full font-semibold">
                        {{ cert.level || 'Certifié' }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CertificationsSection',
    data() {
        return {
            certifications: [
                { name: 'Anglais', level: 'Level B1', issuer: 'British Council', icon: 'bi-globe' },
                { name: 'Développement Front-end', issuer: 'Force-N / UNCHK', icon: 'bi-code' },
                { name: 'Développement Mobile', issuer: 'Force-N / UNCHK', icon: 'bi-phone' },
                { name: 'Data Analysis', issuer: 'Force-N / UNCHK', icon: 'bi-bar-chart' },
                { name: 'Commerce Digital', issuer: 'Force-N / UNCHK', icon: 'bi-cart' },
                { name: 'Marketing Digital', issuer: 'Force-N / UNCHK', icon: 'bi-megaphone' },
                { name: 'Analyste Cybersécurité', issuer: 'Force-N / UNCHK', icon: 'bi-shield-lock' },
            ],
        };
    },
});
</script>

<style>
@import 'bootstrap-icons/font/bootstrap-icons.css';

.transform {
    transition: transform 0.3s ease-in-out;
}

.hover\:scale-105:hover {
    transform: scale(1.05);
}
</style>
