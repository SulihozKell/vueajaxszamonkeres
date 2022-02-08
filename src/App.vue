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
            <button @click="saveButton" :disabled="saving">Mentés</button>
            <button @click="resetForm" :disabled="saving">Mégse</button>
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
      editItem: false,
      saving: false,
      statue: {
        id: null,
        person: '',
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
      this.saving = 'disabled'
      await fetch('http://127.0.0.1:8000/api/statues', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.statue) 
      })
      await this.loadData()
      this.saving = false
      this.resetForm()
      this.editItem = false
    },
    async deleteStatue(id) {
      await fetch(`http://127.0.0.1:8000/api/statues/${id}`, {
        method: 'DELETE'
      })
      await this.loadData()
    },
    async saveStatue() {
      this.saving = 'disabled'
      await fetch(`http://127.0.0.1:8000/api/statues/${this.statue.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.statue)
      })
      await this.loadData()
      this.saving = false
      this.resetForm()
      this.editItem = false
    },
    async editStatue(id) {
      let Response = await fetch(`http://127.0.0.1:8000/api/statues/${id}`)
      let data = await Response.json()
      this.statue = {...data}
      this.editItem = true
    },
    resetForm() {
      this.statue = {
        id: null,
        person: '',
        height: 0,
        price: 0
      }
      this.editItem = false
    },
    saveButton() {
      if (this.editItem) {
        this.saveStatue()
      }
      else {
        this.newStatue()
      }
    }
  },
  mounted() {
    this.loadData()
  }
}
</script>

<style>
body {
  background-color: #50508E;
  font-size: larger;
  color: #E8E7F5;
}
#app {
  background-color: #7985C1;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: fit-content;
  margin: auto;
  padding: 10px;
  border-radius: 5px;
}
table, tr, th, td {
  border: 2px solid #211A52;
  border-collapse: collapse;
}
tr, th, td {
  padding: 4px;
}
input {
  width: 95%;
  border: none;
  box-shadow: 0 0.1rem 1.4rem 0 #211A52;
  padding: 0.3rem;
}
button {
  cursor: pointer;
  padding: 0.3em;
  margin: 0.2em;
  background-color: #211A52;
  border: 2px solid #4053A0;
  border-radius: 5px;
  color: #E8E7F5;
  font-size: smaller;
}
button:hover {
    border: 2px solid #211A52;
    background-color: #4053A0;
}
button:disabled {
    border: 2px solid grey;
    background-color: rgb(151, 151, 151);
}
</style>
