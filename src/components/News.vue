<script setup>
import { ref } from 'vue'
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

</script>
<template>
    <h2 class="newss">Основные новости</h2>
    <p class="news-p">Держим в курсе новостей о жизни Брянской Строительной Компании: ход строительства, акции, мероприятия и полезные советы для нынешних и будущих владельцев квартир.</p>
    <div class="flexs">
        <RouterLink :to="{ name: 'newsDetail', params: { id: to.id} }" class="link" v-for="to in datas.getData">{{ to.name }}</RouterLink>
    </div>
</template>
<style scoped>
.flexs{
    display: flex;
    flex-direction: column;
}
.news{
    font-size: 35px;
}
.news-p{
    font-size: 20px;
}
.link{
    font-size: 20px;
}

</style>