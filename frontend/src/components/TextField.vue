<template>
  <div>
    <label>
      label: {{ label }}
    </label>
    <input type="text" name="text_field" :value="value">
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: 'text-field',
  computed: {
    label() {
      return this.$store.state.textFieldUnit.textField.label
    },
    value() {
      return this.$store.state.textFieldUnit.textField.value
    },
  },
  methods: {

  },
}
</script>
