<template>
  <div class="main-layout" :class="{active:showMobilemenu}">
    <div class="sidebar_contact">
        <side-bar></side-bar>
        <b-button class="disc_btn" @click="showmobilemenu()"><img src="@/assets/images/icons/disc.svg" alt="disc" ></b-button>
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
},
data(){
  return{
    showMobilemenu:false,
  }
},
methods:{
  showmobilemenu(){
    this.showMobilemenu=!this.showMobilemenu;
  }
}
}
</script>

<style>

</style>