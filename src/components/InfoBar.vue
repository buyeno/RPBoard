<template>
  <div>
    <v-list>
      <v-list-item>
        <v-select
          v-model="selection"
          :items="items"
          label="Category"
        ></v-select>
      </v-list-item>
      <v-list-item>
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
          label="Query Database"
          @keyup.enter="apiSearch"
          v-model="query"
        ></v-text-field>
      </v-list-item>
      <v-list-item>
        {{ api }}
      </v-list-item>
    </v-list>
    <div v-if="result">{{ result }}</div>
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
    selection: 'spells',
    query: '',
    result: undefined,
  }),
  computed: {
    api() {
      let api =
        'https://www.dnd5eapi.co/api/' +
        this.selection +
        '/' +
        this.string_to_slug(this.query);
      return api;
    },
  },
  methods: {
    apiSearch() {
      console.log(this.api);
      this.axios.get(this.api).then((response) => {
        this.result = response.data;
        console.log(response.data);
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
