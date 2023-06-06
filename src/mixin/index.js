import Vue from 'vue'

import '@/mixin/datafileds';

//vue select
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";

// flatPickr
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

Vue.mixin({
    components: {    
        vSelect,
        flatPickr
    },
    data() {
      return{

      }
    },


   
});