import Vue from 'vue'

import '@/mixin/datafileds';

//vue select
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";

// flatPickr
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

//vue phone number
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

Vue.mixin({
    components: {    
        vSelect,
        flatPickr,
        VuePhoneNumberInput
    },
    data() {
      return{

      }
    },


   
});