<template>
  <q-page class="q-pa-md">
    <div class="row q-col-gutter-md justify-center">
      <div class="row col-2" v-for="(cnt, index) in contatos" :key="index">
        <q-card class="col-12 row" flat bordered v-ripple @click="abrir(cnt.link)">
          <q-item>
            <q-item-section>
              <q-avatar>
                <q-icon :name="cnt.icone" style="font-size: 42px;" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ cnt.redesocial }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'Contact',
  methods: {
    abrir (url) {
      openURL(url)
    }
  },
  data () {
    return {
      contatos:
      [
        {
          redesocial: 'GitHub',
          link: 'https://github.com/PAHJunior',
          icone: 'fab fa-github'
        },
        {
          redesocial: 'Linkedin',
          link: 'https://www.linkedin.com/in/paulo-arthur-haller-junior-65109815b/',
          icone: 'fab fa-linkedin-in'
        },
        {
          redesocial: 'E-Mail',
          link: 'mailto:pahjunior@outlook.com',
          icone: 'fas fa-envelope'
        }
      ]
    }
  }
}
</script>
