<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-x-md justify-center">
      <div class="row col-7">
        <q-card class="col-12" flat bordered>
          <q-card-section class="row">
            <q-card-section class="col-12">
              Meu nome é <span class="text-weight-bold">Paulo Arthur</span> e tenho {{ age }} anos, nasci em São Paulo e cresci em Taboão da Serra - SP <br/>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="row col-4">
        <q-card class="col-10" flat bordered>
          <q-card-section class="row justify-center">
            <q-img
              class="col-12"
              src="https://avatars0.githubusercontent.com/u/45493635?s=460&u=fdae5b2a425443b019df09517de3afef2df96cd4&v=4"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  computed: {
    age: function () {
      let dtnascimento = new Date(1999, 4, 20)
      let hoje = new Date()

      let unit = 'years'

      let diff = date.getDateDiff(hoje, dtnascimento, unit)
      return diff
    }
  }
}
</script>
