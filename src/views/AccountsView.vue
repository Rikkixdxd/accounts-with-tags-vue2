<template>
  <Accounts />
</template>

<script lang="ts">
import Vue from 'vue';
import Accounts from '@/components/Accounts.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'HomeView',
  components: {
    Accounts,
  },
});
</script>
