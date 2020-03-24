<template>
      <q-header reveal :reveal-offset="5000" elevated class="bg-primary text-dark">
        <q-toolbar>
          <q-toolbar-title class="text-center"><strong>Consumo de energia</strong></q-toolbar-title>
        </q-toolbar>
        <q-toolbar inset class="justify-center q-pa-none">
          <q-btn class="valor-kwh" size="sm" color="info" @click="abreValorKWH = !abreValorKWH">Valor do kWh: R$ {{valorKWH.toFixed(2)}}</q-btn>
          <!-- <div v-if="consumoTotal" class="consumo-total">Total: R${{consumoTotal.toFixed(2)}}</div> -->
          <q-dialog v-model="abreValorKWH" persistent>
            <q-card style="min-width: 350px">
              <q-card-section>
                <div class="text-h6">O valor do kWh</div>
                <em>Com o valor do kWh correto, os cálculos têm maior precisão.
                  O valor pode ser encontrado em sua conta de luz. Caso não sabia ou não tenha
                  a conta em mãos no momento, será usado o valor de R$0,75.
                </em>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <q-input type="number" dense v-model.number="novoValorKWH" autofocus @keyup.enter="prompt = false">
                  <template v-slot:prepend>
                    <span style="font-size:0.8em; font-weight:bold">R$</span>
                  </template>
                </q-input>
              </q-card-section>

              <q-card-actions align="right" class="text-dark">
                <q-btn flat label="Cancelar" v-close-popup @click="novoValorKWH = null" />
                <q-btn flat label="OK" v-close-popup @click="atualizaValorKWH" />
              </q-card-actions>
            </q-card>
          </q-dialog>
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
    valorKWH: {
      get() {
        return this.$store.state.aparelhos.valorKWH;
      },
    },
    consumoTotal: {
      get() {
        return this.$store.state.aparelhos.consumoTotal;
      },
    },
  },
  data() {
    return {
      openDialog: false,
      abreValorKWH: false,
      aparelhosOrdenados: [],
      novoValorKWH: null,
    };
  },
  methods: {
    ordenaAparelhos() {
      this.$store.dispatch('aparelhos/atualizaListaAparelhos', this.aparelhos);
    },
    atualizaValorKWH() {
      // Erro ao dar OK com o valor em branco. VERIFICAR
      this.$store.dispatch('aparelhos/atualizaValorKWH', this.novoValorKWH);
    },
  },
};
</script>

<style lang="scss" scoped>
// .header {
//   height: 120px;
//   text-align: center;
// }
.add-aparelho {
  float: right;
  position: relative;
  top: 20px;
  right: 2.5em;
  z-index: 10000;
}

em {
  font-size: 0.8em;
  color: #999;
}

.consumo-total {
  font-weight: bold;
  color: $dark;
  font-size: 1.1em;
}

.valor-kwh {
  margin-right: 2em;
}
</style>
