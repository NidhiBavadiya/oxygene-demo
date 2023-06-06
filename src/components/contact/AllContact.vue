<template>
  <div>
    <div class="contacts">
      <div class="contact_title">
        <h5 class>contacts</h5>
      </div>
      <div class="top_filters">
        <div class="top_inputs">
          <div class="search">
          <b-form-input class="search_input my-2"></b-form-input>
          <b-icon icon="search" class="search_icon"></b-icon>
          </div>

          <v-select class="search_input my-2" label="Select" :options="option"></v-select>
          <b-button class="green_btn mr-2 my-2">
            <b-icon icon="box-arrow-up" class="mr-1"></b-icon>Export
          </b-button>
          <b-button class="orange_btn my-2">Send Message</b-button>
        </div>
        <div class="top_right_buttons">
          <b-button class="import_btn mr-2 my-2">
            <b-icon icon="box-arrow-down" class="mr-1"></b-icon>Import Contact
          </b-button>
          <b-button class="blue_btn my-2">
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
    };
  }
};
</script>

<style>
</style>