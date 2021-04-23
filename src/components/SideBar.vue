<template>
  <div>
    <v-list>
      <v-list-item @click="charSheet()" class="px-2">
        <v-list-item-avatar>
          <v-img :src="activeUser.avatar"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ activeUser.charName }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ activeUser.name }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list>
      <v-list-item @click="charSheet()" class="px-2">
        <v-list-item-avatar>
          <v-img :src="gm.avatar"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">
            GM
          </v-list-item-title>
          <v-list-item-subtitle>{{ gm.name }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list>
      <v-list-item
        v-for="(player, i) in players"
        :key="i"
        @click="charSheet()"
        class="px-2"
      >
        <v-list-item-avatar>
          <v-img :src="player.avatar"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ player.charName }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ player.name }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>
    <v-list>
      <v-list-item
        v-for="(npc, i) in npcs"
        :key="i"
        @click="charSheet()"
        class="px-2"
      >
        <v-list-item-avatar>
          <v-img :src="npc.avatar"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ npc.charName }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ npc.name }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { JSFrame } from 'jsframe.js';
export default {
  name: 'SideBar',
  data: () => ({
    activeUser: {
      name: 'Active Player',
      id: 'active-player',
      charName: 'Sandra Adams',
      avatar: 'https://randomuser.me/api/portraits/women/85.jpg',
    },
    gm: {
      name: 'Jane GM',
      id: 'jane-gm',
      avatar: 'https://randomuser.me/api/portraits/women/80.jpg',
    },
    players: [
      {
        name: 'John Player',
        id: 'john-player',
        charName: 'Brundlethar Stonefist',
        avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
      },
      {
        name: 'Tom Player',
        id: 'tom-player',
        charName: 'Viktor Magus',
        avatar: 'https://randomuser.me/api/portraits/men/83.jpg',
      },
      {
        name: 'Jessica Player',
        id: 'jessica-player',
        charName: 'Kira Rockhammer',
        avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
      },
    ],
    npcs: [
      {
        name: 'goblin 1',
        id: 'goblin-1',
        charName: 'NPC',
        avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
      },
      {
        name: 'goblin 2',
        id: 'goblin-2',
        charName: 'NPC',
        avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
      },
      {
        name: 'goblin 3',
        id: 'goblin-3',
        charName: 'NPC',
        avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
      },
    ],
  }),
  methods: {
    charSheet() {
      const jsFrame = new JSFrame();
      const frame = jsFrame.create({
        title: 'Character Sheet',
        left: 500,
        top: 100,
        width: 500,
        height: 500,
        movable: true, //Enable to be moved by mouse
        resizable: true, //Enable to be resized by mouse]
        html: '<div id="my_element"></div>',
      });

      //Show the window
      frame.show();
    },
  },
};
</script>
