import Vue from 'vue'

Vue.mixin({
    data() {
      return{
        //all contact
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
          ],
        //Instructor Blocks
          instructorFields:[
            {key:"name",label:"Name"},
            {key:"title",label:"Title"},
            {key:"description",label:"Description"},
            {key:"start_date",label:"Start Date"},
            {key:"end_date",label:"End Date"},
            {key:"start_time",label:"Start Time"},
            {key:"end_time",label:"End Time"},
            {key:"amount",label:"Amount"},
            {key:"paid",label:"Paid"},
            {key:"action",label:"Action"},
          ],
          instructorData:[
            {name:"Dafne Di Ponzio",title:"CASC",description:"PO : Alex B. OBR / OBL : Phil Snow Deb : Jojo Snow Inter : Rémi",start_date:"11.01.2023	",end_date:"11.01.2023",start_time:"15:15:00",end_time:"17:15:00",amount:"-------",paid:"Not Paid"}
          ],

        //leave
        leaveFields:[
            {key:"name",label:"Name"},
            {key:"leave_type",label:"Leave Type"},
            {key:"start_day",label:"Start Date"},
            {key:"end_days",label:"End Date"},
            {key:"total_days",label:"Total Days"},
            {key:"reason",label:"Reason"},
            {key:"leave_status",label:"	Leave Status"},
            {key:"paid",label:"Paid"},
            {key:"action",label:"Action"},
          ],
          leaveData:[
            {name:"Mr. Cedric VH",leave_type:"",start_day:"	10.12.2023",end_days:"15.12.2023",total_days:"6",reason:"MACARENA",leave_status:"Approved",paid:"Paid"}
          ],

          //sign example
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
    },


   
});