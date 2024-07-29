<template>
    <section class="p-8 bg-gradient-to-r from-indigo-100 to-indigo-50">
        <h2 class="text-4xl font-extrabold mb-10 text-indigo-800 relative inline-block">
            LANGAGES DE PROGRAMMATION
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-indigo-500 rounded-full"></span>
        </h2>
        <swiper :slides-per-view="2" :space-between="30" :loop="true" :autoplay="{ delay: 3000 }"
            :pagination="{ clickable: true }" :navigation="true" class="mySwiper">
            <swiper-slide v-for="(lang, index) in languages" :key="index"
                class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between transform hover:scale-105">
                <div>
                    <div class="w-24 h-24 mb-4 mx-auto flex items-center justify-center">
                        <img :src="lang.logo" :alt="lang.name" class="w-full h-full object-contain" />
                    </div>
                    <h3 class="text-xl font-bold text-indigo-800 mb-2 text-center">{{ lang.name }}</h3>
                    <p class="text-indigo-600 text-center">{{ lang.description }}</p>
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default defineComponent({
    name: 'LanguageSkills',
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            languages: [
                { name: 'HTML 5', description: 'Langage de balisage pour le web', logo: '/path/to/html5-logo.png' },
                { name: 'CSS 3', description: 'Langage de style pour le web', logo: '/path/to/css3-logo.png' },
                { name: 'JavaScript ES6', description: 'Langage de script pour le web', logo: '/path/to/javascript-logo.png' },
                { name: 'Vue.js', description: 'Framework JavaScript pour les interfaces utilisateur', logo: '/path/to/vuejs-logo.png' },
                { name: 'Laravel', description: 'Framework PHP pour le développement web', logo: '/path/to/laravel-logo.png' },
                { name: 'React.js', description: 'Bibliothèque JavaScript pour les interfaces utilisateur', logo: '/path/to/reactjs-logo.png' },
                { name: 'Angular', description: 'Framework JavaScript pour les applications web', logo: '/path/to/angular-logo.png' },
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

.mySwiper {
    width: 100%;
    height: 300px;
}

.swiper-button-next,
.swiper-button-prev {
    color: #6366f1;
    /* Couleur indigo */
}
</style>
