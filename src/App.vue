<template>
  <div id="app">
    <div class="d-flex">
        <!-- <router-view /> -->

      <component :is="layout">
        <router-view />
      </component>
    </div>
  </div>
</template>

<script>

const FullLayout = () => import("@/components/layout/FullLayout.vue")
const VerticalLayout = () => import("@/components/layout/VerticalLayout.vue")

export default {
  name: 'App',
  components: {
    FullLayout,
    VerticalLayout
  },


  computed:{
    layout(){
      return "vertical-layout"
    }
  }
}
</script>

<style>
/* #app { */
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
/* } */
</style>
