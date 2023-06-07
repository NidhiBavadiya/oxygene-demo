<template>
  <div class="add_edit_contact">
    <div class="contact_title">
      <h5 class="my-2">Add Contact</h5>
      <b-button class="orange_btn my-2" @click="$emit('showAllContact')">Back</b-button>
    </div>
    <div class="add_edit_details">
      <!-- header title -->
      <div class="form_title">
        <h4>Personal Details</h4>
      </div>
      <!-- profile img upload -->
      <div class="profile_img_radiobtn">
        <div class="profile_img">
          <b-avatar class="profile_avatar_img"></b-avatar>
          <b-button class="orange_btn">Edit Photo</b-button>
        </div>
        <div class="profile_radio">
          <b-form-radio-group
            v-model="selected"
            :options="options"
            class="mb-3 user_type_radiobtn"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          ></b-form-radio-group>
        </div>
      </div>
      <!-- data inputs -->
      <div class="user_details_fill">
        <div class="input_fill_detail">
            <div>
                <label for="salutation" class="input_lables">Salutation</label>
                <v-select id="salutation" class="select_input" v-modal="salutationvalue" label="Select" :options="salutation"></v-select>
            </div>
            <div>
                <label for="first-name" class="input_lables">First Name</label>
                <b-form-input id="first-name"  class="input_field"  v-model="firstName" placeholder="First Name"></b-form-input>
            </div>
            <div>
                <label for="middle-name" class="input_lables">Middle Name</label>
                <b-form-input id="middle-name" class="input_field" v-model="middleName" placeholder="Middle Name"></b-form-input>
            </div>
            <div>
                <label for="last-name" class="input_lables">Last Name</label>
                <b-form-input id="last-name" class="input_field" v-model="lastName" placeholder="Last Name"></b-form-input>
            </div>
        </div>
        <div class="input_fill_detail">
            <div>
                <label for="gender" class="input_lables">Gender</label>
                <v-select id="gender" class="select_input" v-modal="gender" label="Select" :options="gender"></v-select>
            </div>
            <div>
                <label for="DOB" class="input_lables">Date of Birth</label>
                <b-form-input id="DOB"  class="input_field"   v-model="dob" placeholder="Date of Birth"></b-form-input>
            </div>
            <div>
                <label for="email" class="input_lables">Email</label>
                <b-form-input id="email" class="input_field" v-model="email" placeholder="Email"></b-form-input>
            </div>
            <div>
                <label for="mobile" class="input_lables">Mobile</label>
                <VuePhoneNumberInput v-model="mobile" id="mobile" class="input_field"/>
            </div>
        </div>

        <div class="input_fill_detail">
            <div>
                <label for="s_mobile" class="input_lables">Secondary Mobile</label>
                <VuePhoneNumberInput v-model="secondaryMobile" id="s_mobile" class="input_field"/>
            </div>
            <div>
                <label for="c_status" class="input_lables">Customer Status</label>
                <v-select id="c_status" class="select_input" label="Select" :options="salutation"></v-select>
            </div>
            <div>
                <label for="ref_number" class="input_lables">Client Reference Number</label>
                <b-form-input id="ref_number"  class="input_field"  v-model="text" placeholder="Date of Birth"></b-form-input>
            </div>
         
        </div>
      </div>
    <!-- tab  components -->
    <div class="tab_contact mt-5">
        <b-tabs content-class="mt-3">
            <b-tab title="Additional Details" active>
               <aditional-detail></aditional-detail>
            </b-tab>
            <b-tab title="Additional/Emergency Contacts">
               <emergency-detail></emergency-detail>
            </b-tab>
        </b-tabs>
    </div>
    <div class="footer_btn">
        <b-button class="blue_btn mr-3">Add</b-button>
        <b-button class="orange_btn">Cancel</b-button>
    </div>
    </div>
  </div>
</template>

<script>
import AditionalDetail from "@/components/contact/contact-modal/AditionalDetail.vue";
import EmergencyDetail from "@/components/contact/contact-modal/EmergencyDetail.vue";
export default {
    components:{
        AditionalDetail,
        EmergencyDetail
    },
  data() {
    return {
      options: [
        { item: "A", name: " Client" },
        { item: "B", name: " Instructor" },
        { item: "C", name: "B2B Provider" },
        { item: "D", name: "Other" }
      ],
      salutation:["Mr.","Mrs.","Ms.","Jr.","Dr."],

      //inputs
      salutationvalue:"",
      firstName:"",
      middleName:"",
      lastName:"",

    };
  }
};
</script>

<style>
</style>