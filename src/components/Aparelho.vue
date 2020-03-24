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
              Quantidade: {{ quantidade }} <br>
              Tempo diário de uso: 6h <br>
              Dias no mês: 30 <br>
              Consumo (R$): {{ consumo.toFixed(2) }} <br>
            </div>
          </div>
        </div>
        <q-card-actions align="center" >
          <q-btn round color="primary" icon="add" size="sm" @click="quantidade++, atualizaConsumo()" />
          <q-btn round color="accent" icon="remove" size="sm" @click="quantidade--, atualizaConsumo()" />
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
      SET() {
        this.$store.dispatch('aparelhos/atualizaConsumoTotal', this.consumo);
      },
    },
  },
  data() {
    return {
      quantidade: 0,
      consumo: 0,
      horas: 6,
      dias: 30,
    };
  },
  methods: {
    calculaConsumo() {
      this.consumo = ((((this.item.potencia * this.horas) / 1000) * this.dias) * this.valorKWH) * this.quantidade;
    },
    atualizaConsumo() {
      this.calculaConsumo();
      // this.$store.dispatch('aparelhos/atualizaConsumoTotal', menos ? this.consumo * -1 : this.consumo);
    },
    removeAparelho() {
      this.$store.dispatch('aparelhos/atualizaEscolhidos', this.index);
      this.$store.dispatch('aparelhos/atualizaConsumoTotal', 0);
    },
  },
  watch: {
    valorKWH() {
      this.calculaConsumo();
    },
    consumo() {
      this.$store.dispatch('aparelhos/atualizaConsumoTotal', this.consumo);
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
