<template>
  <div id="app">
    <message-toggle />
    <list :items="['list item 1', 'listen item 2']" />
    <text-field-unit />
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

// components
import MessageToggle from '@/components/MessageToggle.vue'
import List from '@/components/List.vue'
import TextFieldUnit from '@/components/TextFieldUnit.vue'

// store
import store from './store'

export default {
  store,
  components: {
    MessageToggle,
    List,
    TextFieldUnit,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
