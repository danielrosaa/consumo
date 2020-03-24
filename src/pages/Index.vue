<template>
  <q-page class="flex row wrap items-start">
    <div class="row wrap justify-center q-gutter-lg q-pa-lg">
      <div v-for="(item, index) in escolhidos" :key="item.nome">
        <aparelho v-if='escolhidos.lenght !== 0' :item="item" :index="index" />
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
    escolhidos: {
      get() {
        return this.$store.state.aparelhos.escolhidos;
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
