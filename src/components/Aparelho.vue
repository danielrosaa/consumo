<template>
  <q-card class="my-card">
        <div class="q-pa-sm aparelho">
          <div class="card-title">{{ item.nome }}</div>
          <div class="content">
            <div class="potencia">
              <label for="potencia">Potência sugerida (W)</label>
              <input type="text" :id="`potencia${index}`" v-model="item.potencia" />
              <!-- Valor da potência sendo alterada fora da mutation. VERIFICAR -->
            </div>
            <div class="infos">
              {{ menos }}
              Quantidade: {{ quantidade }} <br>
              Tempo diário de uso: 6h <br>
              Dias no mês: 30 <br>
              Consumo (R$): {{ consumo.toFixed(2) }} <br>
            </div>
          </div>
        </div>
        <q-card-actions align="center" >
          <q-btn round color="primary" icon="add" size="sm" @click="quantidade++, menos = false, calculaConsumo()" />
          <q-btn :disable="quantidade <= 0" round color="accent" icon="remove" size="sm" @click="quantidade--, menos = true, calculaConsumo()" />
          <q-btn flat round color="dark" icon="close" size="sm" @click="removeAparelho" />
        </q-card-actions>
    </q-card>
</template>

<script>
export default {
  name: 'Aparelho',
  props: ['item', 'index'],
  computed: {
    valorKWH: {
      get() {
        return this.$store.state.aparelhos.valorKWH;
      },
      set(payload) {
        this.$store.dispatch('aparelhos/atualizaValorKWH', payload);
      },
    },
    consumoTotal: {
      get() {
        return this.$store.state.aparelhos.consumoTotal;
      },
      set() {
        this.$store.dispatch('aparelhos/atualizaConsumoTotal', { valor: this.calculaConsumo });
      },
    },
  },
  data() {
    return {
      quantidade: 0,
      consumo: 0,
      horas: 6,
      dias: 30,
      menos: false,
    };
  },
  methods: {
    calculo() {
      return ((((this.item.potencia * this.horas) / 1000) * this.dias) * this.valorKWH);
    },
    calculaConsumo() {
      this.consumo = this.calculo() * this.quantidade;
      const novoValor = this.calculo() * 1;
      if (!this.menos) {
        this.$store.dispatch('aparelhos/atualizaConsumoTotal', { valor: this.consumoTotal.valor + novoValor });
      } else {
        this.$store.dispatch('aparelhos/atualizaConsumoTotal', { valor: this.consumoTotal.valor - novoValor });
      }
    },
    removeAparelho() {
      this.$store.dispatch('aparelhos/atualizaEscolhidos', this.index);
      this.$store.dispatch('aparelhos/atualizaConsumoTotal', { valor: this.consumoTotal.valor - this.consumo });
    },
  },
  watch: {
    valorKWH() {
      this.calculaConsumo();
    },
  },
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  width: 150px;
  .card-title {
    word-break: break-word;
    font-size: 0.8em;
    font-weight: bold;
    background-color: $secondary-light;
    padding: 5px;
    text-align: center;
  }
  .content {
    padding: 5px;
    .potencia {
      font-weight: bold;
      text-align: right;
      label {
        font-size: 0.7em;
        font-weight: normal;
        font-style: italic;
        color: #999;
      }
      input {
        width: 100%;
        text-align: right;
        border: 0;
        color: $dark;
        border-bottom: 1px solid #999;
      }
    }
    .infos {
      font-size: 0.8em;
    }
  }
}

.aparelho {
  min-height: 150px;
  padding: 0;
}
</style>
