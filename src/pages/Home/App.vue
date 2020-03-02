<template>
  <div id="app">
    <head>
      <!-- <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css">
   
    </head>

    <body>
       <fixed-header>
      <nav class="bg-grey px-8 pt-2 shadow-md justify-between">
      <div class="flex items-center flex-shrink-0 text-grey-dark mr-6">
        <!-- <svg class="text-teal-dark h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> -->
        <span style="font-size: 3em; color: Tomato;">
          <font-awesome-icon icon="fa-plane" />
          <i class="fa fa-plane" aria-hidden="true"></i>
        </span>

        <span class="font-semibold text-xl px-3 py-3"> Boba Flights</span>
      </div>
      <div class="-mb-px flex justify-center">
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
    </nav>

    </fixed-header>



      

    
    <div class="bg-fixed py-20" 
      :style="{ backgroundImage: 'url(' + image + ')' }">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold mb-2 text-black">Find Flights that Work for You!</h2>

    </div>
    
    
    
    </div>
    <!-- <img alt="Vue logo" src="@/assets/logo.png" /> -->
  <div class="py-20" style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)">
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
    </div>
    <div style="position: relative">
      <div>
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </div>

      <!-- <div class="short-it">
        <FlightTable msg="Here Are The Flight Deals" />
      </div> -->

      <div />
    </div>
    
    <div
      class="bg-purple text-white sm:bg-green md:bg-blue md:text-yellow lg:bg-red xl:bg-orange ..."
    >Test</div>

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
                <div class="my-6 ml-3 text-xl font-semibold">ABOUT US</div>
                <p class="p-3 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est
                    massa. Donec eget elementum sapien, tincidunt tempor nunc. Cras sodales id ipsum at convallis.</p>
                <p class="p-3 text-gray-400">Morbi tristique massa nec massa auctor, at scelerisque felis consectetur.
                    Morbi tempus et odio sit amet feugiat. Maecenas dignissim a turpis in molestie. Fusce tincidunt
                    vestibulum iaculis.</p>
            </div>

            <!-- CONTACTS COLUMN -->

            <div class="w-full md:w-1/3 p-5 border-r border-blue-800">
                <div class="my-6 text-xl font-semibold">CONTACT US</div>
                <p class="mt-8 text-gray-400">
                    A108 Adam Street <br>
                    New York, NY 535022 <br>
                    United States <br>
                    <strong>Phone:</strong> +1 5589 55488 55 <br>
                    <strong>Email:</strong> info@webcraft.com
                </p>
                <div class="relative w-20 h-20 mx-auto my-12 bg-blue-300 rotate-45">
                    <div
                        class="flex justify-center items-center absolute left-0 top-0 w-10 h-10 hover:-ml-1 hover:-mt-1 bg-blue-800 cursor-pointer">
                        <i class="fab fa-facebook-f fa-lg text-blue-500 -rotate-45"></i>
                    </div>
                    <div
                        class="flex justify-center items-center absolute top-0 right-0 w-10 h-10 hover:-mt-1 hover:-mr-1 bg-blue-800 cursor-pointer">
                        <i class="fab fa-twitter fa-lg text-blue-500 -rotate-45"></i>
                    </div>
                    <div
                        class="flex justify-center items-center absolute right-0 bottom-0 w-10 h-10 hover:-mr-1 hover:-mb-1 bg-blue-800 cursor-pointer">
                        <i class="fab fa-google-plus-g fa-lg text-blue-500 -rotate-45"></i>
                    </div>
                    <div
                        class="flex justify-center items-center absolute bottom-0 left-0 w-10 h-10 hover:-mb-1 hover:-ml-1 bg-blue-800 cursor-pointer">
                        <i class="fab fa-linkedin-in fa-lg text-blue-500 -rotate-45"></i>
                    </div>
                </div>
            </div>

            <!-- FORM COLUMN -->

            <div class="w-full md:w-1/3 p-5">
                <div class="mt-6 text-xl font-semibold">SAY HELLO!</div>
                <form class="w-4/5 mx-auto mt-2 px-6 pt-6 pb-4 rounded">
                    <div class="flex items-center mb-4">
                        <input class="w-full h-10 p-2 border-b border-blue-800 bg-blue-900 text-white" type="text"
                            placeholder="Username">
                    </div>
                    <div class="flex items-center mb-4">
                        <input class="w-full h-10 p-2 border-b border-blue-800 bg-blue-900 text-white" type="text"
                            placeholder="Email">
                    </div>
                    <div class="mb-6">
                        <textarea class="w-full h-24 px-2 pt-2 border-b-2 border-blue-800 bg-blue-900 text-white"
                            placeholder="Message"></textarea>
                    </div>
                    <div class="flex justify-between items-center">
                        <button class="w-full py-2 px-4 rounded bg-orange-600 hover:bg-orange-700 text-white font-bold"
                            type="button">SEND</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
  
</footer>
  </div>
  

  
</template>

<script>
// var image = L.image({
//     imageUrl: require('../../assets/img.jpeg'),   // was iconUrl: './assets/img.png',
// //  iconUrl: require('@/assets/img.png'), // use @ as alternative, depending on the path
//     // ...
// });

// import FixedHeader from 'vue-fixed-header'
export default {
  name: "Home",

  components: {
    HelloWorld: () =>
      import(
        /* webpackChunkName: 'hello-world' */ "@/components/HelloWorld.vue"
      ),
    FlightTable: () =>
      import(
        /* webpackChunkName: 'hello-world' */ "@/components/FlightTable.vue"
      ),
     FixedHeader: () => 
      import(
        "vue-fixed-header" 
      )  
  },
  data () {
  return {
    image: require('@/assets/img.jpeg')
  }
},
  
};
</script>

<style lang="scss">

.circular{
  width: 90px;
  height: 90px;
  background-size: cover;
  border-radius: 50px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navbar.vue-fixed-header--isFixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
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
