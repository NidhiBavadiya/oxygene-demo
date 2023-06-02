<template>
  <div class="main-layout">
    <div class="sidebar_contact">
        <side-bar></side-bar>
    </div>
    <div class="layout_main">
        <router-view />
    </div>
  </div>
</template>

<script>
import SideBar from '../general/SideBar.vue';
export default {
components:{
    SideBar
}
}
</script>

<style>

</style>