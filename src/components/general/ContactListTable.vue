<template>
  <div class="contact_list_table">
    <b-table
      :items="items"
      :fields="fields"
      responsive
    >
      <template #cell(checkbox)>
        <b-form-checkbox
          id="checkbox-1"
          v-model="status"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        ></b-form-checkbox>
      </template>

      <template #cell(action)>
        <b-dropdown id="dropdown-1" class="m-md-2 action-dropdown" left>
          <template #button-content>
            <b-icon icon="three-dots-vertical"></b-icon>
          </template>
          <b-dropdown-item>View</b-dropdown-item>
          <b-dropdown-item>Edit</b-dropdown-item>
          <b-dropdown-item>Delete</b-dropdown-item>
        </b-dropdown>
      </template>
    </b-table>
    <div
      class="d-lg-flex align-items-center justify-content-center px-5 mx-auto no-found-img"
      v-if="(!items.length)"
    >
      <div class="no-data-found">
        <p>No Data Available</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      default: []
    },
    fields: {
      default: []
    },
    componentName: {
      type: String
    }
  },
  data() {
    return {
      
    };
  }
};
</script>

<style>
</style>