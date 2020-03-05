<template>
  <div id="app">
    <h1>Bitcoin Price Index</h1>
    <div
      v-for="currency in info"
      class="currency"
    >
      {{ currency.description }}:
      <span class="lighten">
        <span v-html="currency.symbol" />{{ currency.rate_float | currencydecimal }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlightTable',
  props: {
    msg: {
      type: String,
      default: 'Our Flights',
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
