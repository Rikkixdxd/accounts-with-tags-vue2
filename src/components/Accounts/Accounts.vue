<template>
  <v-card class="pa-4">
    <v-row align="center" no-gutters>
      <v-card-title class="text-h6">Учетные записи</v-card-title>
      <v-btn icon variant="outlined" color="primary" rounded>
        <v-icon icon="mdi-plus" />
      </v-btn>
    </v-row>

    <v-alert type="info" class="my-4">
      Для указания нескольких меток для одной пары логин/пароль используйте
      разделитель ;
    </v-alert>

    <v-simple-table>
      <thead>
        <tr>
          <th class="w-25">Метки</th>
          <th class="w-25">Тип записи</th>
          <th class="w-25">Логин</th>
          <th class="w-25">Пароль</th>
          <th></th>
        </tr>
      </thead>
      <tbody></tbody>
    </v-simple-table>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Accounts",
});
</script>

<style scoped lang="scss"></style>
