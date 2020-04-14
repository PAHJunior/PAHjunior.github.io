
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/', component: () => import('components/Home.vue') },
      { path: '/projects', component: () => import('components/Projects.vue') },
      { path: '/aboutme', component: () => import('components/AboutMe.vue') },
      { path: '/contact', component: () => import('components/Contact.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
