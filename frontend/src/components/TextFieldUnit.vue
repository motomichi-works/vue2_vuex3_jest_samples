<template>
  <section>
    <h1>
      title: {{ title }}
    </h1>
    <div>
      <text-field />
    </div>
  </section>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

import TextField from '@/components/TextField.vue'

export default {
  name: 'text-field-unit',
  components: {
    TextField,
  },
  computed: {
    title() {
      return this.$store.state.textFieldUnit.title
    },
  },
  methods: {

  },
}
</script>
