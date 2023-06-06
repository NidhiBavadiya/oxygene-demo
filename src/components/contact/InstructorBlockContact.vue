<template>
  <div class="Instructor_Blocks">
    <div class="contact_title">
      <h5>Instructor Blocks</h5>
    </div>
    <div class="top_filters">
        <div class="top_inputs">
          <div class="search">
          <b-form-input class="search_input my-2"></b-form-input>
          <b-icon icon="search" class="search_icon"></b-icon>
          </div>
          <flat-pickr class="date_picker mr-2 my-2" placeholder="Select Date"/>
          <v-select class="search_input my-2" label="Select" :options="option"></v-select>
        </div>
        <div class="top_right_buttons">
            <b-button class="delete_contact_btn mr-2"><b-icon icon="trash" class="mr-1"></b-icon>Delete Block</b-button>
            <b-button class="blue_btn mr-2 my-2"><b-icon icon="plus" class="mr-1"></b-icon>Add Block</b-button>
            <b-button class="import_btn"> <b-icon icon="box-arrow-up" class="mr-1"></b-icon>Export</b-button>
        </div>
      </div>

       <!-- table -->
       <div class="contact-table">
        <contact-list-table :fields="instructorFields" :items="instructorData"></contact-list-table>
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
        option: ["California", "Colorado", "Florida"],
        

    }
}
}
</script>

<style>

</style>