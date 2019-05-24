exports.create = function(name) {
  return `
<template>
  <div>
    
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'
  const { mapActions, mapState, mapGetters, mapMutations } = createNamespacedHelpers('${name}')

  export default {
    data() {
      return {

      }
    },
    components: {
      
    },
    computed: {
      ...mapGetters({}),
    },
    methods: {
      ...mapActions([]),
      ...mapMutations([])
    },
    mounted() {

    },
  };
</script>

<style lang="less" scoped>

</style>
  `
}