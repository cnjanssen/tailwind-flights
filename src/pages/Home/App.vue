<template>
  <div id="app">
    <head>
      <!-- <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> -->
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
      >
    </head>

    <body>
      <nav class="bg-gray-800 p-4 mt-0 fixed w-full z-10 top-0 bottom-5">
        <div class="container mx-auto flex flex-wrap items-center">
          <div
            class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold"
          >
            <a
              class="text-white no-underline hover:text-white hover:no-underline"
              href="#"
            >
              <span class="text-2xl pl-2">
                <i class="fa fa-plane" /> Boba Travel
              </span>
            </a>
          </div>
          <div class="flex w-full p-4content-center justify-between md:w-1/2 md:justify-end">
            <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li class="mr-3">
                <a
                  class="inline-block py-2 px-4 text-white no-underline"
                  href="index.html"
                >Explore</a>
              </li>
              <li class="mr-3">
                <a
                  class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  href="#"
                >Log In</a>
              </li>
              <li class="mr-3">
                <a
                  class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  href="flights.html"
                >Sign Up</a>
              </li>
              <li class="mr-3">
                <button
                  class="bg-white font-bold rounded-full py-3 px-3 shadow-lg uppercase tracking-wider"
                  href="flights.html"
                >
                  Sign Up Today!
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <!-- <nav class="bg-grey px-8 pt-2 shadow-md justify-between">
        <div class="flex items-center flex-shrink-0 text-grey-dark mr-6">
          <span style="font-size: 3em; color: Tomato;">
            <font-awesome-icon icon="fa-plane" />
            <i class="fa fa-plane" aria-hidden="true"></i>
          </span>

          <span class="font-semibold text-xl px-3 py-3">Boba Flights</span>
      </div>-->
      <!-- <div class="-mb-px flex justify-center">
          <a
            class="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
            href="index.html"
          >Home</a>
          <a
            class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
            href="flights.html"
          >Explore Flights</a>
          <a
            class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
            href="about.html"
          >About</a>
          <a
            class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3"
            href="signup.html"
          >Sign Up</a>
        </div>
      </nav>-->
    

      <div
        :style="{ backgroundImage: 'url(' + image + ')' }"
        class="bg-fixed py-40"
      >
        <div class="container mx-auto px-6 py-40" />
        <div class="container mx-auto px-4 py-4 bg-indigo-500 opacity-100">
          <h2 class="text-4xl font-bold mb-2 text-black opacity-75">
            Find Flights that Work for You!
          </h2>
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2"
                  for="grid-flight-origin"
                >Origin Airport</label>
                <input
                  id="grid-first-name"
                  class="appearance-none block w-full bg-gray-200 text-gray-800 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Jane"
                >
                <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2"
                  for="grid-flight-destination"
                >Destination Airport</label>
                <input
                  id="grid-last-name"
                  class="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Doe"
                >
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2" />

            <label class="block">
              <span class="text-gray-800">Account Type</span>
              <div class="mt-2">
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="accountType"
                    value="personal"
                  >
                  <span class="ml-2">Personal</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    class="form-radio"
                    name="accountType"
                    value="busines"
                  >
                  <span class="ml-2">Business</span>
                </label>
              </div>
            </label>
          </form>
        </div>
      </div>
      <div>
        <UITable msg="Here Are The Flight Deals" />
      </div>
      
    
      <!-- <img alt="Vue logo" src="@/assets/logo.png" /> -->
      <!-- <div class="py-20" style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-2 text-white">Find Flights that Work for You!</h2>
        <h3
          class="text-2xl mb-8 text-gray-200"
        >Set your preferred location and get deals delivered just for YOU!</h3>

        <button
          class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider"
        >Sign Up Today!</button>
        <div id="app"></div>
      </div>
    </div>-->
      <div style="position: relative">
        <div />
      </div>

      <div
        class="bg-purple text-white sm:bg-green md:bg-blue md:text-yellow lg:bg-red xl:bg-orange ..."
      >
        Test
      </div>

    <!-- OLD NAVIGATION -->
    <!-- <nav>
      <ul>
        <li>Go to</li>

        <li>
          <a href="about.html">About Us</a>
        </li>
      </ul>
    </nav>-->
    </body>
    <footer>
      <div class="w-full bg-blue-900">
        <div class="flex flex-wrap text-center text-white">
          <!-- ABOUT COLUMN -->

          <div class="w-full md:w-1/3 p-5 border-r border-blue-800 md:text-left">
            <div class="my-6 ml-3 text-xl font-semibold">
              ABOUT US
            </div>
            <p class="p-3 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est
              massa. Donec eget elementum sapien, tincidunt tempor nunc. Cras sodales id ipsum at convallis.
            </p>
            <p class="p-3 text-gray-400">
              Morbi tristique massa nec massa auctor, at scelerisque felis consectetur.
              Morbi tempus et odio sit amet feugiat. Maecenas dignissim a turpis in molestie. Fusce tincidunt
              vestibulum iaculis.
            </p>
          </div>

          <!-- CONTACTS COLUMN -->

          <div class="w-full md:w-1/3 p-5 border-r border-blue-800">
            <div class="my-6 text-xl font-semibold">
              CONTACT US
            </div>
            <p class="mt-8 text-gray-400">
              A108 Adam Street
              <br>New York, NY 535022
              <br>United States
              <br>
              <strong>Phone:</strong> +1 5589 55488 55
              <br>
              <strong>Email:</strong> info@webcraft.com
            </p>
            <div class="relative w-20 h-20 mx-auto my-12 bg-blue-300 rotate-45">
              <div
                class="flex justify-center items-center absolute left-0 top-0 w-10 h-10 hover:-ml-1 hover:-mt-1 bg-blue-800 cursor-pointer"
              >
                <i class="fab fa-facebook-f fa-lg text-blue-500 -rotate-45" />
              </div>
              <div
                class="flex justify-center items-center absolute top-0 right-0 w-10 h-10 hover:-mt-1 hover:-mr-1 bg-blue-800 cursor-pointer"
              >
                <i class="fab fa-twitter fa-lg text-blue-500 -rotate-45" />
              </div>
              <div
                class="flex justify-center items-center absolute right-0 bottom-0 w-10 h-10 hover:-mr-1 hover:-mb-1 bg-blue-800 cursor-pointer"
              >
                <i class="fab fa-google-plus-g fa-lg text-blue-500 -rotate-45" />
              </div>
              <div
                class="flex justify-center items-center absolute bottom-0 left-0 w-10 h-10 hover:-mb-1 hover:-ml-1 bg-blue-800 cursor-pointer"
              >
                <i class="fab fa-linkedin-in fa-lg text-blue-500 -rotate-45" />
              </div>
            </div>
          </div>

          <!-- FORM COLUMN -->

          <div class="w-full md:w-1/3 p-5">
            <div class="mt-6 text-xl font-semibold">
              SAY HELLO!
            </div>
            <form class="w-4/5 mx-auto mt-2 px-6 pt-6 pb-4 rounded">
              <div class="flex items-center mb-4">
                <input
                  class="w-full h-10 p-2 border-b border-blue-800 bg-blue-900 text-white"
                  type="text"
                  placeholder="Username"
                >
              </div>
              <div class="flex items-center mb-4">
                <input
                  class="w-full h-10 p-2 border-b border-blue-800 bg-blue-900 text-white"
                  type="text"
                  placeholder="Email"
                >
              </div>
              <div class="mb-6">
                <textarea
                  class="w-full h-24 px-2 pt-2 border-b-2 border-blue-800 bg-blue-900 text-white"
                  placeholder="Message"
                />
              </div>
              <div class="flex justify-between items-center">
                <button
                  class="w-full py-2 px-4 rounded bg-orange-600 hover:bg-orange-700 text-white font-bold"
                  type="button"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  
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

<script>
//axios config
const axios = require('axios');

// import FixedHeader from 'vue-fixed-header'
export default {
  name: "Home",

  components: {
  


      UITable: () =>
      import(
        /* webpackChunkName: 'hello-world' */ "@/components/UITable.vue"
      )
      // FlightCard: () =>
      // import(
      //   /* webpackChunkName: 'hello-world' */ "@/components/FlightCard.vue"
      // )

    // FixedHeader: () => 
    // import("vue-fixed-header")
  },
  data() {
    return {
      image: require("@/assets/img.jpeg"),
      info: null,
      loading: null,
      errored: false
    }
  }
};
</script>

<style lang="scss">
.circular {
  width: 90px;
  height: 90px;
  background-size: cover;
  border-radius: 50px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
}
.text-purple-50 {
  color: color(config("colors.purple") a(50%));
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.short-it {
  position: relative;

  overflow-x: hidden;
  overflow-y: auto;
  max-height: 300px;

  + div {
    position: absolute;
    bottom: 0;
    z-index: 1;

    display: block;
    width: 100%;
    height: 40px;
    background-image: linear-gradient(to bottom, transparent, #fff);
  }
}

nav ul {
  margin-top: 30px;
}
</style>
