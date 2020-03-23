<template>
  <q-page class="flex row wrap items-start">

      <q-select
        filled
        v-model="model"
        label="Eletrodomésticos"
        use-input
        hide-selected
        multiple
        fill-input
        input-debounce="0"
        :options="options"
        option-label="nome"
        @filter="filterFn"
        style="width: 100%"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              Sem resultados
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    <div class="row wrap justify-center q-gutter-lg q-pa-lg">
      <div v-for="item in model" :key="item.nome">
        <aparelho v-if='model.lenght !== 0' :item="item" />
      </div>
    </div>
  </q-page>
</template>

<script>
import Aparelho from 'components/Aparelho';

export default {
  name: 'PageIndex',
  components: { Aparelho },
  computed: {
    aparelhos: {
      get() {
        return this.$store.state.aparelhos.aparelhos;
      },
    },
  },
  data() {
    return {
      model: null,
      options: this.aparelhos,
    };
  },
  methods: {
    filterFn(val, update) {
      update(() => {
        const needle = val.toLowerCase();
        this.options = this.aparelhos.filter((v) => v.nome.toLowerCase().indexOf(needle) > -1);
      });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
