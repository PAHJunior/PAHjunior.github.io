<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated>
      <q-img
        src="~assets/banner.png"
        style="height: 200px;"
      />
        <q-tabs
          class="bg-dark text-white shadow-2"
        >
          <transition>
            <q-route-tab label="Home" to="/" exact />
          </transition>
          <transition>
            <q-route-tab label="Projetos" to="/projects" exact />
          </transition>
          <transition>
            <q-route-tab label="Sobre Mim" to="/aboutme" exact />
          </transition>
          <transition>
            <q-route-tab label="Contato" to="/contact" exact />
          </transition>
        </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      tab: 'home'
    }
  }
}
</script>
