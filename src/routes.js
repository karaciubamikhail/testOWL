import {createRouter, createWebHistory} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import News from './components/News.vue'
import NewsDetail from './components/NewsDetail.vue'


export const router =  createRouter({
    routes: [
        {
            path: '/',
            component: HelloWorld,
        },
        {
            path: '/news',
            component: News,
        },
        {
            path: '/news/:id',
            component: NewsDetail,
            name:'newsDetail',
            props: true  
        }
    ],
    history: createWebHistory()
})