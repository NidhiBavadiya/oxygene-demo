<template>
  <div>
  <div class="leave_contact" v-if="leaveApplication">
    <div class="contact_title">
      <h5>Contact Leave</h5>
    </div>

    <div class="leave_details">
      <div class="top_right_buttons"> 
        <b-button class="import_btn mr-2"> <b-icon icon="box-arrow-up" class="mr-1"></b-icon>Export</b-button>
        <b-button class="blue_btn" @click="leaveApplication=false"><b-icon icon="plus" class="mr-1"></b-icon>Add Leave</b-button>
      </div>
      <!-- table -->
      <div class="contact-table">
        <contact-list-table :fields="leaveFields" :items="leaveData"></contact-list-table>
      </div>
    </div>
    </div>
      <add-edit-leave  @showLeaveform="leaveApplication=true" v-else></add-edit-leave>
  </div>
</template>

<script>
import AddEditLeave from './contact-modal/AddEditLeave.vue';
import ContactListTable from '../general/ContactListTable.vue';
export default {
  components:{
    ContactListTable,
    AddEditLeave
  },
  data(){
    return{
      leaveApplication:true,
    }
  }
}
</script>

<style>

</style>