<template>
  <div class="main-layout">
    <div class="sidebar_contact">
        <side-bar></side-bar>
    </div>
    <div class="layout_main">
      <user-detail-navbar></user-detail-navbar>
        <router-view />
    </div>
  </div>
</template>

<script>
import SideBar from '../general/SideBar.vue';
import UserDetailNavbar from '../general/UserDetailNavbar.vue';
export default {
components:{
    SideBar,
    UserDetailNavbar
}
}
</script>

<style>

</style>