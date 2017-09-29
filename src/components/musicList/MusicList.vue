<template>
  <div class="music-list">
    <div v-for="(item, index) of musicData" class="music-item">
      dfed
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'musicData'
      ])
    }
  }

</script>

<style>

</style>
