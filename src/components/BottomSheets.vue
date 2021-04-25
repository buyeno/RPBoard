<template>
  <v-bottom-sheet inset scrollable :value="sheetExpand">
    <v-card>
      <v-toolbar color="cyan" dark flat>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab v-for="sheet in sheets" :key="sheet">
            {{ sheet.name }}
          </v-tab>
        </v-tabs>
      </v-toolbar>
      <v-card-text style="height: 400px">
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="sheet in sheets" :key="sheet">
            <v-card-text>{{ sheet }}</v-card-text>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
export default {
  name: 'bottomSheet',
  data: () => ({
    tab: null,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }),
  computed: {
    sheetExpand() {
      return this.$store.state.sheets.sheetExpand;
    },
    sheets() {
      return this.$store.state.sheets.sheets;
    },
  },
  methods: {},
};
</script>
