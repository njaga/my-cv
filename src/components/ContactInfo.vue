<!-- ContactInfo.vue -->
<template>
    <section class="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300">
        <h2 class="text-3xl font-bold mb-6 text-blue-800 relative">
            CONTACT
            <span class="absolute bottom-0 left-0 w-20 h-1 bg-blue-500"></span>
        </h2>
        <ul class="space-y-4">
            <li v-for="(item, index) in contactItems" :key="index"
                class="flex items-center p-3 rounded-lg hover:bg-blue-50 transition duration-300">
                <component :is="item.icon" class="w-8 h-8 mr-4 text-blue-600" />
                <span class="text-lg">{{ item.text }}</span>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Phone, Mail, Globe, Linkedin, MapPin } from 'lucide-vue-next';

export default defineComponent({
    name: 'ContactInfo',
    components: { Phone, Mail, Globe, Linkedin, MapPin },
    setup() {
        const contactItems = [
            { icon: Phone, text: '+221 78 163 34 19' },
            { icon: Mail, text: 'contact@ndiagandiaye.com' },
            { icon: Globe, text: 'www.ndiagandiaye.com' },
            { icon: Linkedin, text: 'linkedin.com/in/ndiagandiaye' },
            { icon: MapPin, text: 'Scat Urbam, Dakar' },
        ];

        return { contactItems };
    }
});
</script>
<style scoped>
/* Styles spécifiques au composant */
</style>