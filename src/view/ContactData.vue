<template>
<div class="d-flex">
    <side-bar></side-bar>
    
    <div>
    <user-detail-navbar></user-detail-navbar>
    </div>
</div>
</template>

<script>
import SideBar from '@/components/general/SideBar.vue';
import UserDetailNavbar from '@/components/general/UserDetailNavbar.vue';
export default {
    components:{
        SideBar,
        UserDetailNavbar
    }
}
</script>

<style>

</style>