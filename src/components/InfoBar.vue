<template>
  <div>
    <v-list>
      <v-list-item>
        <v-select
          v-model="selection"
          :items="items"
          @change="getList()"
          label="Category"
        ></v-select>
      </v-list-item>
      <v-list-item v-if="selection">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
          label="Search"
          @keyup.enter="apiSearch"
          v-model="query"
        ></v-text-field>
      </v-list-item>
      <v-list-item
        @click="getApi(item.url)"
        v-for="(item, i) in filteredList"
        :key="i"
      >
        {{ item.name }}
      </v-list-item>
    </v-list>
    <div v-if="result">{{ sheets }}</div>
  </div>
</template>

<script>
export default {
  name: 'InfoBar',
  data: () => ({
    items: [
      'spells',
      'backgrounds',
      'classes',
      'races',
      'equipment',
      'monsters',
    ],
    baseApi: 'https://www.dnd5eapi.co',
    selection: '',
    query: '',
    result: undefined,
    listResult: [],
  }),
  computed: {
    sheets() {
      return this.$store.state.sheets.sheets;
    },
    api() {
      let api =
        this.baseApi +
        '/api/' +
        this.selection +
        '/' +
        this.string_to_slug(this.query);
      return api;
    },
    list() {
      let api = 'https://www.dnd5eapi.co/api/' + this.selection;
      return api;
    },
    filteredList() {
      let filteredList = [];

      console.log(this.listResult);
      for (let i in this.listResult) {
        if (
          this.listResult[i].index.includes(this.string_to_slug(this.query)) ||
          this.query === ''
        ) {
          filteredList.push(this.listResult[i]);
        }
      }
      return filteredList;
    },
  },
  methods: {
    apiSearch() {
      console.log(this.api);
      this.axios.get(this.api).then((response) => {
        // this.result = response.data;
        console.log(response.data);
      });
    },
    getList() {
      this.axios.get(this.list).then((response) => {
        this.listResult = response.data.results;
      });
    },
    getApi(url) {
      this.axios.get(this.baseApi + url).then((response) => {
        this.result = response.data;
        this.$store.commit('addSheet', response.data);
        this.$store.commit('sheetExpand');
      });
    },
    string_to_slug(str) {
      str = str.replace(/^\s+|\s+$/g, ''); // trim
      str = str.toLowerCase();

      // remove accents, swap ñ for n, etc
      const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
      const to = 'aaaaeeeeiiiioooouuuunc------';
      for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
      }

      str = str
        .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

      return str;
    },
  },
};
</script>
