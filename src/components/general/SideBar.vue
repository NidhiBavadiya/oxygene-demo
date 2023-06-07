<template>
  <div class="sidebar">
    <div class="top_logo">
        <img src="@/assets/images/icons/oxygene-logo.png" alt="company logo" class="oxy-logo">
        <h5 class="oxy_crm_title">CRM</h5>
    </div>
    <!-- sidebar list data -->
    <div class="side_options">
        <!-- collapse menu -->
        <!-- Booking -->
        <b-navbar-toggle target="navbar-toggle-collapse-booking" class="side_list">
            <div class="d-flex">
                <span>
                    <img src="@/assets/images/icons/book.svg" alt="book" class="side_icons">
                </span>
                <button
                  class="accordion-button custom-nav collapsed"
                  type="button"
                >Booking</button>
            </div>
        </b-navbar-toggle>
        <b-collapse id="navbar-toggle-collapse-booking" is-nav>
            <div class="ml-auto">
                <div>
                    <ul class="sidelist_ul">
                        <li class="side_li"><a href="#">Booking Calendar</a></li>
                        <li class="side_li"><a href="#">Add Booking</a></li>
                        <li class="side_li"><a href="#">All Bookings</a></li>
                        <li class="side_li"><a href="#">Quote Offer</a></li>
                        <li class="side_li"><a href="#">Feedback</a></li>
                        <li class="side_li"><a href="#"> Group Management</a></li>
                    </ul>
                </div>
            </div>
        </b-collapse>

        <!-- Dashbord -->
        <b-navbar-toggle target="navbar-toggle-collapse-dashboard" class="side_list">
            <div class="d-flex">
                <img src="@/assets/images/icons/home.svg" alt="home" class="side_icons">
                <button
                  class="accordion-button custom-nav collapsed"
                  type="button"
                >Dashboard</button>
            </div>
        </b-navbar-toggle>
        <b-collapse id="navbar-toggle-collapse-dashboard" is-nav>
            <div class="ml-auto">
                <div>
                    <ul class="sidelist_ul">
                        <li class="side_li"><a href="#">General</a></li>
                        <li class="side_li"><a href="#">Courses</a></li>
                        <li class="side_li"><a href="#">Finance Dashboard</a></li>
                    </ul>
                </div>
            </div>
        </b-collapse>

        <!-- Finance -->
        <b-navbar-toggle target="navbar-toggle-collapse-finance" class="side_list">
            <div class="d-flex">
                <img src="@/assets/images/icons/dollar-sign.svg" alt="dollar" class="side_icons">
                <button
                  class="accordion-button custom-nav collapsed"
                  type="button"
                >Finance</button>
            </div>
        </b-navbar-toggle>
        <b-collapse id="navbar-toggle-collapse-finance" is-nav>
            <div class="ml-auto">
                <div>
                    <ul class="sidelist_ul">
                        <li class="side_li"><a href="#">Cash Payment</a></li>
                        <li class="side_li"><a href="#">Consolidated Invoices</a></li>
                        <li class="side_li"><a href="#">Manual Consolidated Invoices</a></li>
                        <li class="side_li"><a href="#">Expenditure</a></li>
                        <li class="side_li"><a href="#">Credit Notes</a></li>
                        <li class="side_li"><a href="#">Cashbook (JDC)</a></li>
                        <li class="side_li"><a href="#">Salesbook (JDV)</a></li>
                    </ul>
                </div>
            </div>
        </b-collapse>

        <!-- Payroll -->
        <b-navbar-toggle target="navbar-toggle-collapse-payroll" class="side_list">
            <div class="d-flex">
                <img src="@/assets/images/icons/book.svg" alt="book" class="side_icons">
                <button
                  class="accordion-button custom-nav collapsed"
                  type="button"
                >Payroll</button>
            </div>
        </b-navbar-toggle>

        <!-- Reports -->
        <b-navbar-toggle target="navbar-toggle-collapse-reports" class="side_list">
            <div class="d-flex">
                <img src="@/assets/images/icons/clipboard.svg" alt="clipboard" class="side_icons">
                <button
                  class="accordion-button custom-nav collapsed"
                  type="button"
                >Reports</button>
            </div>
        </b-navbar-toggle>
        <b-collapse id="navbar-toggle-collapse-reports" is-nav>
            <div class="ml-auto">
                <div>
                    <ul class="sidelist_ul">
                        <router-link to="/report">
                                <li class="side_li">Monthly Cash Payment</li>
                        </router-link>
                    </ul>
                </div>
            </div>
        </b-collapse>


        <!-- Contacts -->
        <b-navbar-toggle target="navbar-toggle-collapse-contacts" class="side_list">
            <div class="d-flex">
                <img src="@/assets/images/icons/users.svg" alt="users" class="side_icons">
                <button
                  class="accordion-button custom-nav collapsed"
                  type="button"
                >Contacts</button>
            </div>
        </b-navbar-toggle>
        <b-collapse id="navbar-toggle-collapse-contacts" is-nav>
            <div class="ml-auto">
                <div>
                    <ul class="sidelist_ul">
                        <router-link to="/contact">
                            <li class="side_li">
                                All Contacts
                            </li>
                        </router-link>
                        <router-link to="/contact/leave">
                            <li class="side_li">
                                All Leave
                            </li>
                        </router-link>
                        <router-link to="/contact/sign">
                            <li class="side_li">
                                Signature Specimens
                            </li>
                        </router-link>
                        <router-link to="/contact/instructor">
                            <li class="side_li">
                                Instructor Blocks
                            </li>
                        </router-link>
                    </ul>
                </div>
            </div>
        </b-collapse>


        <!-- Course Catalog -->
        <b-navbar-toggle target="navbar-toggle-collapse-catalog" class="side_list">
            <div class="d-flex">
                <img src="@/assets/images/icons/book.svg" alt="book" class="side_icons">
                <button
                  class="accordion-button custom-nav collapsed"
                  type="button"
                >Course Catalog</button>
            </div>
        </b-navbar-toggle>
        <b-collapse id="navbar-toggle-collapse-catalog" is-nav>
            <div class="ml-auto">
                <div>
                    <ul class="sidelist_ul">
                        <li class="side_li"><a href="#">General</a></li>
                        <li class="side_li"><a href="#">Courses</a></li>
                        <li class="side_li"><a href="#">Finance Dashboard</a></li>
                    </ul>
                </div>
            </div>
        </b-collapse>


        <!-- Product Catalog -->
        <b-navbar-toggle target="navbar-toggle-collapse-product-catalog" class="side_list">
            <div class="d-flex">
                <img src="@/assets/images/icons/book.svg" alt="book" class="side_icons">
                <button
                  class="accordion-button custom-nav collapsed"
                  type="button"
                >Product Catalog</button>
            </div>
        </b-navbar-toggle>
        <b-collapse id="navbar-toggle-collapse-product-catalog" is-nav>
            <div class="ml-auto">
                <div>
                    <ul class="sidelist_ul">
                        <li class="side_li"><a href="#">Products/Rentals Management</a></li>
                        <li class="side_li"><a href="#">Product/Rental Packs Management</a></li>
                    </ul>
                </div>
            </div>
        </b-collapse>

        <!-- Masters & Settings -->
        <b-navbar-toggle target="navbar-toggle-collapse-settings" class="side_list">
            <div class="d-flex">
            <img src="@/assets/images/icons/briefcase.svg" alt="briefcase" class="side_icons">
                <button
                  class="accordion-button custom-nav collapsed"
                  type="button"
                >Masters & Settings</button>
            </div>
        </b-navbar-toggle>
        <b-collapse id="navbar-toggle-collapse-settings" is-nav>
            <div class="ml-auto">
                <div>
                    <ul class="sidelist_ul">
                        <li class="side_li"><a href="#">Masters</a></li>
                        <li class="side_li"><a href="#">Static Content</a></li>
                        <li class="side_li"><a href="#">Payment Methods</a></li>
                    </ul>
                </div>
            </div>
        </b-collapse>

             <!-- user -->
        <b-navbar-toggle class="side_list">
            <div class="d-flex side_value">
                <img src="@/assets/images/icons/users.svg" alt="users" class="side_icons">
                <button
                  class="accordion-button custom-nav collapsed"
                  type="button"
                >User</button>
            </div>
        </b-navbar-toggle>

             <!--User Action Trails-->
            <b-navbar-toggle  class="side_list">
            <div class="d-flex">
                <img src="@/assets/images/icons/file-text.svg" alt="file" class="side_icons">
                <button
                  class="accordion-button custom-nav collapsed"
                  type="button"
                >User Action Trails</button>
            </div>
        </b-navbar-toggle>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>