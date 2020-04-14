<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

body {
  background-color: #363636
}
.fade-enter {
    opacity: 0;
}

.fade-enter-active {
    transition: opacity 2s ease;
}

.fade-leave {

}

.fade-leave-active {
    transition: opacity 2s ease;
    opacity: 0;
}

</style>
