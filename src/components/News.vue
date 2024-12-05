<script setup>
import { ref } from 'vue'
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { useDataStore } from '../stores/store'
const datas = useDataStore();
onBeforeMount(async () => {
    await datas.FetchData();
});
console.log(datas.getData)
let data = ref(null);
</script>
<template>
    <h2 class="news-header">Основные новости</h2>
    <p class="news-desk">Держим в курсе новостей о жизни Брянской Строительной Компании: ход строительства, акции, мероприятия и полезные советы для нынешних и будущих владельцев квартир.</p>
    <div class="news-list">
        <RouterLink :to="{ name: 'newsDetail', params: { id: to.id} }" class="news-list__link" v-for="to in datas.getData">{{ to.name }}</RouterLink>
    </div>
</template>
<style scoped>
.news-list{
    display: flex;
    flex-direction: column;
}
.news-header{
    font-size: 35px;
}
.news-desk{
    font-size: 20px;
}
.news-list__link{
    font-size: 20px;
}

</style>