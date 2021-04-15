<template>
  <div class="home">
    <canvas id="canvas" width="300" height="300"></canvas>
  </div>
</template>

<script>
// @ is an alias to /src
import { fabric } from "fabric";

export default {
  name: "Canvas",
  methods: {
    setCanvas() {
      var canvas = new fabric.Canvas("canvas");

      var rect = new fabric.Rect({
        top: 100,
        left: 100,
        width: 60,
        height: 70,
        fill: "red"
      });
      canvas.add(rect);
    }
  },
  mounted() {
    this.setCanvas();
  }
};
</script>
