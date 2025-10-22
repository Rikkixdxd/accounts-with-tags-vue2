<template>
  <Accounts />
</template>

<script lang="ts">
import Vue from 'vue';
import { Accounts } from '@/components/Accounts';

export default Vue.extend({
  name: 'HomeView',
  components: {
    Accounts,
  },
});
</script>
