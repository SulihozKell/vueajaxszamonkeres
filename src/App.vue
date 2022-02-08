<template>
  <div id="app">
    <table>
      <thead>
        <tr>
          <th>Személy</th>
          <th>Magasság</th>
          <th>Ár</th>
          <th>Műveletek</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="statue in statues" v-bind:key="statue.id">
          <td>{{ statue.person }}</td>
          <td>{{ statue.height }}</td>
          <td>{{ statue.price }}</td>
          <td>
            <button @click="deleteStatue(statue.id)">Törlés</button>
            <button @click="editStatue(statue.id)">Szerkesztés</button>
          </td>
        </tr>
        <tr>
          <td>
            <input type="text" v-model="statue.person">
          </td>
          <td>
            <input type="number" v-model="statue.height">
          </td>
          <td>
            <input type="number" v-model="statue.price">
          </td>
          <td>
            <button @click="newStatue">Mentés</button>
            <button @click="resetForm">Mégse</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      statue: {
        id: null,
        person: null,
        height: 0,
        price: 0
      },
      statues: []
    }
  },
  methods: {
    async loadData () {
      let Response = await fetch('http://127.0.0.1:8000/api/statues')
      let data = await Response.json()
      this.statues = data
    },
    async newStatue() {
      await fetch('http://127.0.0.1:8000/api/statues', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.statue) 
      })
      await this.loadData()
      this.resetForm()
    },
    resetForm() {
      this.statue = {
        id: null,
        person: '',
        height: 0,
        price: 0
      }
    }
  },
  mounted() {
    this.loadData()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
