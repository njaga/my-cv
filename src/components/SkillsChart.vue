<!-- SkillsChart.vue -->
<template>
    <section class="bg-white p-8 rounded-2xl shadow-xl">
        <h2 class="text-4xl font-extrabold mb-10 text-indigo-800 relative inline-block">
            COMPÉTENCES
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-indigo-500 rounded-full"></span>
        </h2>
        <div class="w-full h-96">
            <apexchart type="radar" :options="chartOptions" :series="series"></apexchart>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

export default defineComponent({
    name: 'SkillsChart',
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    toolbar: {
                        show: false
                    }
                },
                xaxis: {
                    categories: ['Développement Web', 'Design', 'Marketing Digital', 'CMS', 'Gestion de Projet']
                },
                yaxis: {
                    show: false
                },
                dataLabels: {
                    enabled: true,
                    background: {
                        enabled: true,
                        borderRadius: 2,
                    }
                },
                theme: {
                    palette: 'palette2'
                }
            },
            series: [{
                name: 'Compétences',
                data: [95, 85, 90, 80, 85]
            }]
        }
    }
});
</script>