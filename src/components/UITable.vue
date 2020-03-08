<template>
  <div class="flex flex-col">
    <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
      <table class="min-w-full">
        <thead>
          <tr>
            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Origin
            </th>
            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Destination
            </th>
            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Cost
            </th>
            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50" />
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white">
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
              v-for="flight in info">@{{ info.to_location }}
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
              Director, Human Resources
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
              bernardlane@example.com
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
              Owner
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
              <a
                href="#"
                class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
              >Edit</a>
            </td>
          </tr>
          <tr class="bg-gray-50">
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
              Bernard Lane
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
              Director, Human Resources
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
              bernardlane@example.com
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
              Owner
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
              <a
                href="#"
                class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
              >Edit</a>
            </td>
          </tr>
          <tr class="bg-white">
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
              Bernard Lane
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
              Director, Human Resources
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
              bernardlane@example.com
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
              Owner
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
              <a
                href="#"
                class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
              >Edit</a>
            </td>
          </tr>
          <tr class="bg-gray-50">
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
              Bernard Lane
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
              Director, Human Resources
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
              bernardlane@example.com
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
              Owner
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
              <a
                href="#"
                class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
              >Edit</a>
            </td>
          </tr>
          <tr class="bg-white">
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
              Bernard Lane
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
              Director, Human Resources
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
              bernardlane@example.com
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
              Owner
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
              <a
                href="#"
                class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
              >Edit</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
      // declare the null data then make a call with axios later
      // we will also declare an array called rowData
      rowData: [],
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    axios
      .get('https://raw.githubusercontent.com/cnjanssen/tailwind-flights/master/data/SFO_3-5-2020-flights.json')
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
