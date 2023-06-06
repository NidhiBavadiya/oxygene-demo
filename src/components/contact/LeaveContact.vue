<template>
  <div class="leave_contact">
    <div class="contact_title">
      <h5>Contact Leave</h5>
    </div>

    <div class="leave_details">
      <div class="top_right_buttons"> 
        <b-button class="import_btn mr-2"> <b-icon icon="box-arrow-up" class="mr-1"></b-icon>Export</b-button>
        <b-button class="blue_btn"><b-icon icon="plus" class="mr-1"></b-icon>Add Leave</b-button>
      </div>
      <!-- table -->
      <div class="contact-table">
        <contact-list-table :fields="leaveFields" :items="leaveData"></contact-list-table>
      </div>
    </div>
  </div>
</template>

<script>
import ContactListTable from '../general/ContactListTable.vue';
export default {
  components:{
    ContactListTable
  },
  data(){
    return{
   
    }
  }
}
</script>

<style>

</style>