import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import noauthLayout from '../layout/noauthLayout.vue'
import emplacementComponents from '../components/emplacementComponents.vue'
import acceuil from '../views/acceuil.vue'
import partenairesComponents from '../components/partenairesComponents.vue'
import evenementComponents from '../components/evenementComponents.vue'
import servicesComponents from '../components/servicesComponents.vue'
import actualitesComponents from '../components/actualitesComponents.vue'
import quisommesnousComponents from '../components/quisommesnousComponents.vue'
import carriereinnovation from '../components/carriereinnovation.vue'
import projet from '../components/projet.vue'
import contact from '../components/contact.vue'
import sectionComponents from '../components/sectionComponents.vue'
import itineraireComponents from '../components/itineraireComponents.vue'
import footerComponents from '../components/footerComponents.vue'
import headerComponents from '../components/headerComponents.vue'
import homePage from '../components/homePage.vue'
import opportuniteComponents from '../components/opportuniteComponents.vue'
import login from '../components/login.vue'
import team from '../components/team.vue'
import faq from '../components/faq.vue'
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [
        // {
        //   path: '/',
        //   name: 'accueil',
        //   component: HomeView,
        //   meta: { layout: noauthLayout, public: true }
        // },
        // {
        //     path: "/",
        //     name: "acceuil",
        //     component: acceuil,
        //     meta: { layout: noauthLayout, public: true }

        // },
        {
            path: '/emplacement',
            name: 'Emplacement',
            component: emplacementComponents,
            meta: { layout: noauthLayout, public: true }
        },

        {
            path: '/partenaires',
            name: 'Partenaire',
            component: partenairesComponents,
            meta: { layout: noauthLayout, public: true }
        },
        {
            path: '/footer',
            name: 'Footer',
            component: footerComponents,
            meta: { layout: noauthLayout, public: true }
        },
        {
            path: '/',
            name: 'Home',
            component: homePage,
            meta: { layout: noauthLayout, public: true }
        },
        {
            path: '/header',
            name: 'Header',
            component: headerComponents,
            meta: { layout: noauthLayout, public: true }
        },
        {
            path: '/evenement',
            name: 'Evenement',
            component: evenementComponents,
            meta: { layout: noauthLayout, public: true }
        },
        {
            path: '/services',
            name: 'Services',
            component: servicesComponents,
            meta: { layout: noauthLayout, public: true }
        },
         {
            path: '/opportunite',
            name: 'Opportunite',
            component: opportuniteComponents,
            meta: { layout: noauthLayout, public: true }
        },
        {
            path: '/actualites',
            name: 'Actualites',
            component: actualitesComponents,
            meta: { layout: noauthLayout, public: true }
        },
        {
            path: '/quisommesnous',
            name: 'QuiSommesNous',
            component: quisommesnousComponents,
            meta: { layout: noauthLayout, public: true }
        },
        {
            path: '/carriereinnovation',
            name: 'Carriereinnovation',
            component: carriereinnovation,
            meta: { layout: noauthLayout, public: true }
        },
        {
            path: '/projet',
            name: 'projet',
            component: projet,
            meta: { layout: noauthLayout, public: true }
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact,
            meta: { layout: noauthLayout, public: true }
        },

        {
            path: '/section',
            name: 'Section',
            component: sectionComponents,
            meta: { layout: noauthLayout, public: true }
        },
        {
            path: '/itineraire',
            name: 'Itineraire',
            component: itineraireComponents,
            meta: { layout: noauthLayout, public: true }
        },
        {
            path: '/login',
            name: 'login',
            component: login,
            meta: { layout: noauthLayout, public: true }
        },
        {
            path: '/team',
            name: 'team',
            component: team,
            meta: { layout: noauthLayout, public: true }
        },
        {
            path: '/faq',
            name: 'faq',
            component: faq,
            meta: { layout: noauthLayout, public: true }
        }
    ]
})

export default router