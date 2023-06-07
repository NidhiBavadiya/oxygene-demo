<template>
  <div class="aditional_details">
   <b-row>
    <b-col cols="12" md="6" lg="3" xl="3">
        <label for="nationality" class="input_lables">Nationality</label>
        <b-form-input id="nationality"  class="input_field"  v-model="nationality"></b-form-input>
    </b-col>
    <b-col cols="12" md="6" lg="3" xl="3">
        <label for="skiingLevel" class="input_lables"> Skiing Level</label>
        <v-select id="skiingLevel" class="select_input" label="Select" :options="salutation"></v-select>
    </b-col>
    <b-col cols="12" md="6" lg="3" xl="3">
        <label for="languages" class="input_lables">Languages</label>
        <v-select id="languages" class="select_input" label="Select" :options="salutation"></v-select>
    </b-col>
    <b-col cols="12" md="6" lg="3" xl="3">
        <label for="allergies" class="input_lables">Allergies</label>
        <v-select id="allergies" class="select_input" label="Select" :options="salutation"></v-select>
    </b-col>
   </b-row>

   <b-row>
    <b-col cols="12" md="6" lg="6" xl="6">
        <label for="textarea" class="input_lables">Comments</label>
        <b-form-textarea
            id="textarea"
            v-model="Comments"
            placeholder="Enter something..."
            class="textarea_input mx-2"
            rows="3"
            max-rows="6"
            ></b-form-textarea>
    </b-col>
   </b-row>

   <b-row>
    <b-col cols="12" md="6" lg="3" xl="3">
    <div class="address-title">
      <h5 class="my-2">Permanent Address</h5>
    </div>
    <div class="mt-3">
        <label for="street_address" class="input_lables">Street Address 1</label>
        <b-form-input id="street_address" class="input_field" v-model="lastName" placeholder="Last Name"></b-form-input>
        <label for="street_address2" class="input_lables">Street Address 2</label>
        <b-form-input id="street_address2" class="input_field" v-model="lastName" placeholder="Last Name"></b-form-input>
        <label for="city" class="input_lables">City</label>
        <b-form-input id="city" class="input_field" v-model="lastName" placeholder="Last Name"></b-form-input>
        <label for="zip_code" class="input_lables">Zip Code</label>
        <b-form-input id="zip_code" class="input_field" v-model="lastName" placeholder="Last Name"></b-form-input>
        <label for="state" class="input_lables">State</label>
        <b-form-input id="state" class="input_field" v-model="lastName" placeholder="Last Name"></b-form-input>
        <label for="country" class="input_lables">Country</label>
        <v-select id="country" class="select_input" v-modal="salutationvalue" label="Select" :options="salutation"></v-select>
    </div>
    </b-col>
    <b-col cols="12" md="6" lg="3" xl="3">
        <div class="address-title">
            <h5 class="my-2">Local Address</h5>
        </div>
        <div class="mt-3">
            <label for="street_address" class="input_lables">Street Address 1</label>
            <b-form-input id="street_address" class="input_field" v-model="lastName" placeholder="Last Name"></b-form-input>
            <label for="street_address2" class="input_lables">Street Address 2</label>
            <b-form-input id="street_address2" class="input_field" v-model="lastName" placeholder="Last Name"></b-form-input>
            <label for="city" class="input_lables">City</label>
            <b-form-input id="city" class="input_field" v-model="lastName" placeholder="Last Name"></b-form-input>
            <label for="zip_code" class="input_lables">Zip Code</label>
            <b-form-input id="zip_code" class="input_field" v-model="lastName" placeholder="Last Name"></b-form-input>
            <label for="state" class="input_lables">State</label>
            <b-form-input id="state" class="input_field" v-model="lastName" placeholder="Last Name"></b-form-input>
            <label for="country" class="input_lables">Country</label>
            <v-select id="country" class="select_input" v-modal="salutationvalue" label="Select" :options="salutation"></v-select>
        </div>
    </b-col>
    <b-col cols="12" md="6" lg="3" xl="3">
        <div class="address-title">
            <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
            >
            Local Same As Perment Address
            </b-form-checkbox>
        </div>
        <div class="mt-3">
            <label for="referral" class="input_lables">Referral</label>
            <b-form-input id="referral" class="input_field" v-model="referral"></b-form-input>
        </div>
    </b-col>

    <b-col cols="12" md="6" lg="3" xl="3">
        <div class="address-title">
        <b-form-checkbox
            id="checkbox-2"
            v-model="status"
            name="checkbox-2"
            value="accepted"
            unchecked-value="not_accepted"
        >
        Newsletter Subscription
        </b-form-checkbox>
        </div>
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