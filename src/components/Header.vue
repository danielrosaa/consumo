<template>
      <q-header reveal :reveal-offset="5000" elevated class="bg-primary text-dark">
        <q-toolbar>
          <q-toolbar-title class="text-center"><strong>Consumo de energia</strong></q-toolbar-title>
        </q-toolbar>
        <q-toolbar inset class="justify-center q-pa-none">
          Onde aparecem as coisas escritas aqui?
        </q-toolbar>
        <q-btn round color="secondary" class="add-aparelho" @click="openDialog = !openDialog, ordenaAparelhos()">
          <q-icon name="flash_on" color="primary" size="md"/>
        </q-btn>
        <q-dialog v-model="openDialog">
        <q-card>
          <q-card-section>
            <div class="text-h6 text-center">Escolha os aparelhos</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
                <div v-for="item in aparelhos" :key="item.nome" class="q-gutter-sm">
                  <q-checkbox
                    v-model="escolhidos"
                    :val="item"
                    color="secondary"
                    :label="item.nome"
                    size="sm"
                  />
                </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-header>
</template>

<script>
export default {
  name: 'AppHeader',
  computed: {
    aparelhos: {
      get() {
        return this.$store.state.aparelhos.aparelhos;
      },
    },
    escolhidos: {
      get() {
        return this.$store.state.aparelhos.escolhidos;
      },
      set(payload) {
        this.$store.dispatch('aparelhos/atualizaEscolhidos', payload);
      },
    },
  },
  data() {
    return {
      openDialog: false,
      // escolhidos: [],
      aparelhosOrdenados: [],
    };
  },
  methods: {
    ordenaAparelhos() {
      this.$store.dispatch('aparelhos/atualizaListaAparelhos', this.aparelhos);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 120px;
  text-align: center;
}
.add-aparelho {
  float: right;
  position: relative;
  top: 20px;
  right: 2.5em;
  z-index: 10000;
}
</style>
