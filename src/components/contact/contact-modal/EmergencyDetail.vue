<template>
    <div class="emergency_detail">
      <b-row>
    
    <b-col cols="12" md="6" lg="3" xl="3">
        <label for="salutation" class="input_lables"> Salutation </label>
        <v-select id="salutation" class="select_input" label="Select" :options="salutation"></v-select>
    </b-col>
    <b-col cols="12" md="6" lg="3" xl="3">
        <label for="name" class="input_lables">Name</label>
        <b-form-input id="name"  class="input_field"  v-model="nationality"></b-form-input>
    </b-col>
    <b-col cols="12" md="6" lg="3" xl="3">
        <label for="relationship" class="input_lables">RelationShip</label>
        <v-select id="relationship" class="select_input" label="Select" :options="salutation"></v-select>
    </b-col>
    <b-col cols="12" md="6" lg="3" xl="3">
        <label for="mobile" class="input_lables">Mobile</label>
        <VuePhoneNumberInput id="mobile" class="input_field"/>
    </b-col>
    <b-col cols="12" md="6" lg="3" xl="3">
        <label for="nationality" class="input_lables">Secondary Mobile</label>
        <b-form-input id="nationality"  class="input_field"  v-model="nationality"></b-form-input>
    </b-col>
   </b-row>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>