<template>
  <div>
    <div>
      <button
        v-for="(entry, index) in filterList"
        :item="entry"
        :key="index"
        @click="filter = entry; active = index;"
        :class="{ active: entry == filter }"
      >
        {{ entry }}
      </button>
    </div>
    <ul class="userWrap">
      <li
        v-for="(entry, index) in users"
          v-if="entry[fkey] === filter || filter === 'All'"
          :item="entry"
          :key="index"
          class="user"
      >
        <h2 class="title">{{ entry.name }}</h2>
        <span class="language">
          Primary Language: <strong>{{ entry.mainLanguage }}</strong>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DataDisplay",
  data: function() {
    return {
      fkey: "mainLanguage",
      filterList: ["JavaScript", "Python", "PHP", "Java", "All"],
      filter: "All",
      users: []
    };
  },
  created() {
    var apiURL = "https://next.json-generator.com/api/json/get/4JCnNiTCr";
    fetch(apiURL)
      .then(res => res.json())
      .then(res => (this.users = res))
      .catch(error => console.log(error));
  }
};
</script>