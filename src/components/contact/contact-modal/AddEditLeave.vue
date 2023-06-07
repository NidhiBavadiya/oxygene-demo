<template>
  <div class="add_edit_contact leave_contact">
    <div class="contact_title">
      <h5 class="my-2">Add Leave</h5>
    </div>
    <div class="leave_form">
    <div class="d-flex">
      <label for="skiingLevel" class="input_lables"> Contact Type </label>
      <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="A">Instructor</b-form-radio>
    </div>
    <div>
        <b-row>
            <b-col cols="12" md="6" lg="4" xl="4">
                <label for="contacts" class="input_lables">Contacts</label>
                <v-select id="contacts" class="select_input" label="Select" :options="salutation"></v-select>
            </b-col>
            <b-col  cols="12" md="6" lg="4" xl="4">
                <label for="leave_type" class="input_lables">Leave Type</label>
                <v-select id="leave_type" class="select_input" label="Select" :options="salutation"></v-select>
            </b-col>
            <b-col  cols="12" md="6" lg="4" xl="4">
                <label for="reason" class="input_lables">Reason</label>
                <b-form-input id="reason"  class="input_field" ></b-form-input>
            </b-col>
        </b-row>
    </div>
    <div>
        <b-row>
            <b-col cols="12" md="6" lg="4" xl="4">
              <label for="start_date" class="input_lables">Start Date</label>
                <b-form-input id="start_date"  class="input_field" ></b-form-input>
            </b-col>
            <b-col  cols="12" md="6" lg="4" xl="4">
              <label for="end_date" class="input_lables">End Date</label>
                <b-form-input id="end_date"  class="input_field" ></b-form-input>
            </b-col>
            <b-col  cols="12" md="6" lg="4" xl="4">
                <label for="no_of_days" class="input_lables">No. of Days</label>
                <b-form-input id="no_of_days" class="input_field" ></b-form-input>
            </b-col>
        </b-row>
    </div>
    <div class="footer_btn">
        <b-button class="blue_btn mr-3">Add</b-button>
        <b-button class="orange_btn" @click="$emit('showLeaveform')">Cancel</b-button>
    </div>
         
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>