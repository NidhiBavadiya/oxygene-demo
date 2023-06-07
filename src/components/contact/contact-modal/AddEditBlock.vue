<template>
  <div>
    <div class="Add_Edit_Block">
        <div class="contact_title">
            <h5>Contact Leave</h5>
        </div>
        <div class="block_detail">
        <b-row class="mt-2">
            <b-col cols="12" md="6" lg="4" xl="4">
                <label for="instructor" class="input_lables">Instructor</label>
                <v-select id="instructor" class="select_input" label="Select" :options="salutation"></v-select>
            </b-col>
            <b-col  cols="12" md="6" lg="4" xl="4">
                <label for="lebel" class="input_lables">label</label>
                <v-select id="lebel" class="select_input" label="Select" :options="salutation"></v-select>
            </b-col>
            <b-col  cols="12" md="6" lg="4" xl="4">
                <label for="start_date" class="input_lables">Start Date</label>
                <b-form-input id="start_date"  class="input_field" ></b-form-input>
            </b-col>
        </b-row>
            <b-row class="mt-2">
            <b-col cols="12" md="6" lg="4" xl="4">
              <label for="end_date" class="input_lables">End Date</label>
                <b-form-input id="end_date"  class="input_field" ></b-form-input>
            </b-col>
            <b-col  cols="12" md="6" lg="4" xl="4">
              <label for="start_time" class="input_lables">Start Time</label>
                <b-form-input id="start_time"  class="input_field" ></b-form-input>
            </b-col>
            <b-col  cols="12" md="6" lg="4" xl="4">
                <label for="end_time" class="input_lables">End Time</label>
                <b-form-input id="end_time" class="input_field"></b-form-input>
            </b-col>
        </b-row>
        <b-row class="mt-2">
            <b-col cols="12" md="6" lg="4" xl="4">
                <label for="colour_code" class="input_lables">Block Colour Code</label>
                <b-form-input id="colour_code"  class="input_field" type="color" ></b-form-input>
            </b-col>
            <b-col  cols="12" md="6" lg="3" xl="3">
                <label for="colour_code" class="input_lables">Payment Status</label>
                <div class="d-flex"> 
                    <b-form-radio v-model="selected"  name="some-radios" value="A" class="mr-2">Paid</b-form-radio>
                    <b-form-radio v-model="selected"  name="some-radios" value="B">Not Paid</b-form-radio>
                </div>
            </b-col>
            <b-col  cols="12" md="6" lg="4" xl="4">
                <label for="amount" class="input_lables">Amount</label>
                <b-form-input id="amount" class="input_field"></b-form-input>
                <p class="amount_note">Note: If you enter the amount here, this same amount will be reflected in the payroll for this instructor. If the amount is left blank, the amount will be calculated as per the salary type of this instructor and reflected in the payroll.</p>
            </b-col>
        </b-row>

        <div class="footer_btn mt-5">
        <b-button class="blue_btn mr-3">Add</b-button>
        <b-button class="orange_btn" @click="$emit('showblock')">Cancel</b-button>
    </div>
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