// App.vue
<template>
  <div id="app">
    <DataDisplay/>
  </div>
</template>

<script>
import DataDisplay from './datadisplay.vue'

export default {
  name: "App",
  components: {
    DataDisplay
  }
};
</script>