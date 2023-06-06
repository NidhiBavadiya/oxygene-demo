<template>
  <div class="cash_report">
    <div class="contact_title">
      <h5>Monthly Cash Payment Report</h5>
    </div>
    <div class="top_filters">
        <div class="top_inputs">
        <div>
            <label for="searchType" class="select_label">Search Type</label>
            <v-select class="search_input" label="Select" :options="SearchType" id="searchType"></v-select>
        </div>
        <div>
            <label for="month" class="select_label">Month</label>
            <v-select class="search_input" label="Select" :options="MonthOption" id="month"></v-select>
        </div>
        <div>
            <label for="year" class="select_label">Year</label>
            <v-select class="search_input" label="Select" :options="YearOption" id="year"></v-select>
        </div>
        <div>
            <label for="resort" class="select_label">Resort</label>
            <v-select class="search_input" label="Select" :options="ResortOption" id="resort"></v-select>
        </div>
        </div>
        <div class="top_right_buttons">
            <b-button class="orange_btn mr-2 my-2"> <b-icon icon="Search" class="mr-1"></b-icon>Search</b-button>
            <b-button class="green_btn"> <b-icon icon="box-arrow-up" class="mr-1"></b-icon>Export</b-button>
        </div>
      </div>

       <!-- table -->
       <div class="contact-table">
        <contact-list-table :fields="reportFields" :items="reportData"></contact-list-table>
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
            SearchType:["Select Month/Select Year","Date Range"],
            MonthOption:["January","february","March"],
            YearOption:["2020","2021","2022","2023"],
            ResortOption:["100Acre","Oktio"],

            reportFields:[
                {key:"cash_type",label:"Cash Type"},
                {key:"resort",label:"Resort"},
                {key:"contacts",label:"Contacts"},
                {key:"amount",label:"Amount"},
                {key:"running_ammount",label:"Running Amount"},
                {key:"payment_date",label:"Payment Date"},
                {key:"created_by",label:"Created By"},
                {key:"last_update",label:"Last Updated By"},
                {key:"description",label:"Description"},
            ],
            reportData:[
                // {cash_type:"",resort:"",contacts:"",amount:"",running_ammount:"",payment_date:"",created_by:"",last_update:"",description:""}    
            ]
        }
    }
}
</script>

<style>

</style>