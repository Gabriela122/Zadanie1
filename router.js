/* COMPONENTS */
const Wszystko = {
    template: '#wszystko'
}

const Wiadomości = {
    template: '#wiadomosci'
}

const Grafika = {
    template: '#grafika'
}
const Zakupy = {
    template: '#zakupy'
}
const Filmy = {
    template: '#filmy'
}
const Więcej = {
    template: '#wiecej'
}
const Ustawienia = {
    template: '#ustawienia'
}
const Narzędzia = {
    template: '#narzedzia'
}

/* ROUTES */
const routes = [
    { path: '/wszystko', component: Wszystko },
    { path: '/wiadomości', component: Wiadomości },
    { path: '/grafika', component: Grafika },
    { path: '/zakupy', component: Zakupy },
    { path: '/filmy', component: Filmy },
    { path: '/więcej', component: Więcej },
    { path: '/ustawienia', component: Ustawienia },
    { path: '/narzędzia', component: Narzędzia },
]

const router = new VueRouter({
    routes
});


const app = new Vue({
    router,
}).$mount('#app')