<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Canvas />
  </div>
</template>

<script>
// @ is an alias to /src
import Canvas from '@/components/Canvas.vue';

export default {
  name: 'Home',
  components: {
    Canvas,
  },
};
</script>
