<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-md justify-center">
      <div class="row col-4" v-for="{x, index} in 3" :key="index">
        <q-card class="col-12" flat bordered>
          <q-badge floating>Vuejs, cordova, nodejs</q-badge>
          <q-card-section>
            <div class="text-weight-bold text-h6">
              GRWeb
            </div>
            <div class="text-body1">
              GRWeb - Participei do desenvolvimento do GRWeb
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
    }
  }
}
</script>
