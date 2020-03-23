<template>
  <q-card class="my-card">
        <div class="q-pa-sm aparelho">
          <span style="word-break: break-word;">{{ item.nome }}</span>
          <br>
          {{ item.potencia }}

        </div>
        <q-card-actions align="center">
          <q-btn flat round color="positive" icon="add" size="sm" />
          <q-btn flat round color="negative" icon="remove" size="sm" />
          <q-btn flat round color="dark" icon="close" size="sm" />
        </q-card-actions>
    </q-card>
</template>

<script>
export default {
  name: 'Aparelho',
  props: ['item'],
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  width: 150px;
}

.aparelho {
  background: #eee;
  min-height: 150px;
}
</style>
