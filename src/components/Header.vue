<template>
      <q-header reveal :reveal-offset="5000" elevated class="bg-primary text-dark">
      <q-toolbar>
        <q-toolbar-title class="text-center"><strong>Consumo de energia</strong></q-toolbar-title>
      </q-toolbar>
      <q-toolbar inset class="justify-center q-pa-none">
        Onde aparecem as coisas escritas aqui?
      </q-toolbar>
            <q-btn round color="secondary" class="add-aparelho">
        <q-icon name="flash_on" color="primary" size="md"/>
      </q-btn>
    </q-header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {};
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
