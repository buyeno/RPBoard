<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-navigation-drawer expand-on-hover app>
      <v-list>
        <v-list-item @click="charSheet()" class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">
              Sandra Adams
            </v-list-item-title>
            <v-list-item-subtitle>Active Player</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item @click="charSheet()" class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/80.jpg"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">
              GM
            </v-list-item-title>
            <v-list-item-subtitle>Jane GM</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item @click="charSheet()" class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">
              Brundlethar Stonefist
            </v-list-item-title>
            <v-list-item-subtitle>John Player</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="charSheet()" class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/83.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">
              Viktor Magus
            </v-list-item-title>
            <v-list-item-subtitle>Tom Player</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="charSheet()" class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/81.jpg"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">
              Kira Rockhammer
            </v-list-item-title>
            <v-list-item-subtitle>Jessica Player</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list>
        <v-list-item @click="charSheet()" class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/10.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">
              Orc
            </v-list-item-title>
            <v-list-item-subtitle>NPC</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="charSheet()" class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/10.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">
              Orc
            </v-list-item-title>
            <v-list-item-subtitle>NPC</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="charSheet()" class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/10.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">
              Orc
            </v-list-item-title>
            <v-list-item-subtitle>NPC</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer app clipped right expand-on-hover>
      <v-list>
        <v-list-item>
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-list-item>
        <v-list-item v-for="n in 5" :key="n" link>
          <v-list-item-content>
            <v-list-item-title>Item {{ n }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <Canvas />
    </v-main>

    <v-footer app color="transparent" height="72" inset>
      <v-text-field
        background-color="grey lighten-1"
        dense
        flat
        hide-details
        rounded
        solo
      ></v-text-field>
    </v-footer>
  </v-app>
</template>

<script>
import Canvas from '@/components/Canvas.vue';
import { JSFrame } from 'jsframe.js';
export default {
  data: () => ({ drawer: false }),
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
        resizable: true, //Enable to be resized by mouse
      });
      //Show the window
      frame.show();
    },
  },
  components: {
    Canvas,
  },
};
</script>
