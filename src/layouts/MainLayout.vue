<template>
  <q-layout view="hhh lpR lfr">

    <app-header />
    <q-drawer v-model="left" side="left" overlay behavior="mobile" elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import AppHeader from 'components/Header';

export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      left: false,
    };
  },
};
</script>
