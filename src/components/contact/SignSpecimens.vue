<template>
  <div class="sign_example">
    <div class="contact_title">
      <h5>Signature Specimens</h5>
    </div>
    <div class="top_filters">
        <div class="top_inputs">
          <div class="search">
          <b-form-input class="search_input my-2"></b-form-input>
          <b-icon icon="search" class="search_icon"></b-icon>
          </div>
        </div>
    </div>
     <!-- table -->
    <div class="contact-table">
      <contact-list-table :fields="signFields" :items="signData"></contact-list-table>
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
    signFields:[
      {key:"name",label:"Name"},
      {key:"status",label:"Status"},
      {key:"contacts_primary",label:"Contacts Primary Tag"},
      {key:"date_joining",label:"Date of Joining"},
      {key:"dob",label:"Date of Birth"},
      {key:"insurance_no",label:"Insurance Number"},
      {key:"certification",label:"Certification"},
      {key:"mobile",label:"Mobile"},
      {key:"signature",label:"Signature"},
      {key:"action",label:"Action"},
    ],
    signData:[
      {name:"Mr. Vivek Patel",status:"",contacts_primary:"Instructor",date_joining:"11.11.2021",dob:"	16.08.1990",insurance_no:"32434354",certification:"Moniteur National Etranger ,1er Cycle ,",mobile:"6857252498"}
    ],
  }
 }
}
</script>

<style>

</style>