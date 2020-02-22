<template>
  <div id="app">
    <nav class="bg-grey px-8 pt-2 shadow-md justify-between">
      <div class="flex items-center flex-shrink-0 text-grey-dark mr-6">
        <!-- <svg class="text-teal-dark h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> -->
        <span style="font-size: 3em; color: Tomato;">
          <font-awesome-icon icon="fa-plane" />
          <i class="fa fa-plane" aria-hidden="true"></i>
        </span>

        <span class="font-semibold text-xl px-3 py-3">Boba Flights</span>
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
    <h1>About</h1>
  </div>
</template>

<script>

export default {
  name: 'About'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
