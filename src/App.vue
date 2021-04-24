<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-navigation-drawer expand-on-hover app>
      <SideBar />
    </v-navigation-drawer>

    <v-navigation-drawer app clipped right>
      <InfoBar />
    </v-navigation-drawer>

    <v-main>
      <Canvas />
    </v-main>
    <div
      v-for="(charSheet, i) in charSheets"
      class="sheet"
      app
      :key="i"
      :id="charSheet.id"
    >
      <div :id="charSheet.id + 'header'">Click here to move</div>
      <CharSheet />
    </div>

    <v-footer app color="white" height="72" inset>
      <v-text-field
        background-color="grey lighten-1"
        dense
        flat
        hide-details
        rounded
        solo
        label="Chat"
      ></v-text-field>
    </v-footer>
  </v-app>
</template>

<script>
import Canvas from '@/components/Canvas.vue';
import SideBar from '@/components/SideBar.vue';
import CharSheet from '@/components/CharacterSheet.vue';
import InfoBar from '@/components/InfoBar.vue';
import { JSFrame } from 'jsframe.js';
export default {
  data: () => ({
    drawer: false,
    dialog: false,
    charSheets: [],
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
  computed: {},
  watch: {
    charSheets: {
      handler() {
        for (let i in this.charSheets) {
          console.log(this.charSheets[i].id);
          this.dragElement(this.charSheets[i].id);
        }
      },
    },
  },
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
    dragElement(charSheetId) {
      console.log(charSheetId);
      let elmnt = document.getElementById(charSheetId);
      console.log(elmnt);
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      if (document.getElementById(elmnt.id + 'header')) {
        // if present, the header is where you move the DIV from:
        document.getElementById(
          elmnt.id + 'header'
        ).onmousedown = dragMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
        elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
      }

      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    },
  },
  components: {
    Canvas,
    CharSheet,
    SideBar,
    InfoBar,
  },
  mounted() {
    this.dragElement('mydiv');
  },
};
</script>

<style scoped>
#mydiv {
  position: absolute;
  z-index: 9;
  border: 1px solid #d3d3d3;
  text-align: center;
  resize: both;
  width: 500px;
}
#mydivheader {
  padding: 10px;
  cursor: move;
  z-index: 10;
  background-color: #2196f3;
  color: #fff;
}
.sheet {
  position: absolute;
  z-index: 9;
  border: 1px solid #d3d3d3;
  text-align: center;
  width: 500px;
}
</style>
