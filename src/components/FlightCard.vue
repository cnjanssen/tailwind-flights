<template>
  <div class="FlightCard">
    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <!-- Article -->
      <article class="overflow-hidden rounded-lg shadow-lg">
        <a href="#">
          <img
            alt="Placeholder"
            class="block h-auto w-full"
            src="https://picsum.photos/600/400/?random"
          >
        </a>

        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 class="text-lg">
            <a
              class="no-underline hover:underline text-black"
              href="#"
            >
              <!-- <template v-for="block in info">
                    <component :is="block.title" :block="block" :key="block._id"></component>
                </template> -->
              {{ info.to_location["874"] }} 
            </a>
          </h1>
          <p class="text-grey-darker text-sm">
            11/1/19
          </p>
        </header>

        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
          <a
            class="flex items-center no-underline hover:underline text-black"
            href="#"
          >
            <img
              alt="Placeholder"
              class="block rounded-full"
              src="https://picsum.photos/32/32/?random"
            >
            <p class="ml-2 text-sm">
              Author Name 1
            </p>
          </a>
          <a
            class="no-underline text-grey-darker hover:text-red-dark"
            href="#"
          >
            <span class="hidden">Like</span>
            <i class="fa fa-heart" />
          </a>
        </footer>
      </article>
      <!-- END Article -->
    </div>
    <!-- END Column -->
  </div>
</template>

<script>
const axios = require('axios');
export default {
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    axios
      .get('https://raw.githubusercontent.com/cnjanssen/tailwind-flights/master/data/3-5-2020_SFO.json')
      .then(response => {
        this.info = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
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
