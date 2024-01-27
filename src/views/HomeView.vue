<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import axios from 'axios';

@Options({
  components: {
    HelloWorld,
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        await axios.post('http://localhost:3000/api/data').then(response => {
          console.log('Data:', response);
        })
          .catch(error => {
            console.error('There was an error!', error);
          });
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error here
      }
    }
  }
})
export default class HomeView extends Vue { }
</script>
