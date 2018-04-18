<template>
  <div class="gamestart-container">
    <div class="gamestart-input">
      <label for="playerOne">
        Player 1 - Name:
        <input type="text" name="playerOne" v-model="playerOne">
      </label>
      <label for="playerTwo">
        Player 2 - Name:
        <input type="text" name="playerTwo" v-model="playerTwo">
      </label>
      <button @click.stop="start()">Ok!</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      playerOne: '',
      playerTwo: '',
      gameStyle: 'Standard'
    }
  },
  methods: {
    ...mapActions([
      'gameStart'
    ]),
    start () {
      let stateUpdateObj = {
        playerOne: this.playerOne,
        playerTwo: this.playerTwo,
        gameStyle: this.gameStyle
      }
      this.gameStart(stateUpdateObj)
      this.$router.push({ path: '/game' })
    }
  }
}
</script>

<style>
.gamestart-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4)
}
.gamestart-container .gamestart-input {
  position: relative;
  top: 75%;
  left: 30%;
}
</style>
