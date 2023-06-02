<template>
  <div>
    <div class="contacts">
      <div class="contact_title">
        <h5 class>contacts</h5>
      </div>
      <div class="top_filters">
        <div class="top_inputs">
          <b-form-input class="search_input"></b-form-input>
          <v-select class="search_input" label="Select" :options="option"></v-select>
          <b-button class="export_btn mr-2">
            <b-icon icon="box-arrow-up" class="mr-1"></b-icon>Export
          </b-button>
          <b-button class="message_btn">Send Message</b-button>
        </div>
        <div class="top_right_buttons">
          <b-button class="import_btn mr-2">
            <b-icon icon="box-arrow-down" class="mr-1"></b-icon>Import Contact
          </b-button>
          <b-button class="add_contact_btn">
            <b-icon icon="plus" class="mr-1"></b-icon>Add Contact
          </b-button>
        </div>
      </div>
      <!-- table -->
      <div class="contact-table">
        <contact-list-table :fields="contactFields" :items="contactData"></contact-list-table>
      </div>
    </div>
  </div>
</template>

<script>
import ContactListTable from "@/components/general/ContactListTable.vue"
export default {
    components: {
    ContactListTable,
  },
  data() {
    return {
      option: ["California", "Colorado", "Florida"],
      contactFields:[
      {key:"checkbox",label:""},
      {key:"name",label:"Name"},
      {key:"gender",label:"Gender"},
      {key:"email",label:"E-mail"},
      {key:"customer_no",label:"Customer ref no"},
      {key:"mobile",label:"Mobile"},
      {key:"contacts_tag",label:"contacts Primary Tag"},
      {key:"action",label:"Action"},
    ],
    contactData:[
        {name:"Krunal Pandiya",gender:"mail",email:"krunalp@123.com",customer_no:"f3213",mobile:"9878645667",contacts_tag:"client"},
    ]
    };
  }
};
</script>

<style>
</style>