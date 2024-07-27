<!-- AppHeader.vue -->
<template>
    <header class="relative h-screen flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700"></div>
        <div class="absolute inset-0 opacity-30">
            <div v-for="i in 50" :key="i" class="absolute bg-white rounded-full" :style="{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`
            }">
            </div>
        </div>
        <div class="relative z-10 text-center text-white">
            <h1 class="text-6xl font-extrabold mb-4 animate-fadeIn">NDIAGA NDIAYE</h1>
            <p class="text-3xl font-light mb-8 animate-slideUp">Digital Manager</p>
            <button @click="scrollToContent" class="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold 
                       transition duration-300 hover:bg-blue-100 hover:scale-105 animate-pulse">
                Découvrir mon profil
            </button>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AppHeader',
    methods: {
        scrollToContent() {
            const contentElement = document.getElementById('content');
            if (contentElement) {
                contentElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
});
</script>

<style scoped>
@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slideUp {
    from {
        transform: translateY(20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.animate-fadeIn {
    animation: fadeIn 1s ease-out;
}

.animate-slideUp {
    animation: slideUp 1s ease-out 0.5s both;
}
</style>