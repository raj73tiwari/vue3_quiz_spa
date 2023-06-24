// Routes 

import { createRouter, createWebHistory} from 'vue-router'
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import QuizView from "../views/QuizView.vue"
import Four04View from "../views/Four04View.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:"/",
            component: HomeView,
            name:"home"
        },
        {
            path:"/home",
            redirect:"/"
        },
        {
            path:"/about",
            component: AboutView,
            name:"about"
        },
        {
            path:"/quiz/:id",
            component: QuizView,
            name:"quiz"
        },
        {
            path:"/:catchall(.*)*",
            component: Four04View,
            name:"404"
        },

    ]
})

export default router