<script>
// import ThemeSwitcher from '../ThemeSwitcher';
// import HireMeModal from "../HireMeModal.vue";
// import feather from "feather-icons";
import AppHeaderLinks from "./AppHeaderLinks.vue";
import Button from "../reusable/Button.vue";

export default {
  components: {
    // ThemeSwitcher,
    // HireMeModal,
    AppHeaderLinks,
    Button,
  },
  data() {
    return {
      isOpen: false,
      theme: "",
      modal: false,
      categories: [
        {
          id: 1,
          value: "web",
          name: "Web Application",
        },
        {
          id: 2,
          value: "mobile",
          name: "Mobile Application",
        },
        {
          id: 3,
          value: "ui-ux",
          name: "UI/UX Design",
        },
        {
          id: 4,
          value: "branding",
          name: "Branding & Anim",
        },
      ],
    };
  },

  created() {
    this.theme = localStorage.getItem("theme") || "light";
  },
  mounted() {
    // feather.replace();
    this.theme = localStorage.getItem("theme") || "light";
  },
  methods: {
    updateTheme(theme) {
      this.theme = theme;
    },
    showModal() {
      if (this.modal) {
        // Stop screen scrolling
        document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden");
        this.modal = false;
      } else {
        document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden");
        this.modal = true;
      }
    },
  },
  updated() {
    // feather.replace();
  },
};
</script>

<template>
  <nav id="nav" class="shadow fixed top-0 z-10 bg-primary-light md:px-10 px-5 w-full">
    <!-- Header start -->
    <div
      class="z-10 py-2 lg:py-0 max-w-screen-lg xl:max-w-screen-xl block lg:flex justify-between lg:items-center items-center"
    >
      <!-- Header menu links and small screen hamburger menu -->
      <div class="flex justify-between items-center">
        <!-- Header logos -->
        <div class="flex py-1">
          <router-link to="/">
            <img src="@/assets/jmng-logo.svg " alt="" class="logo" />
          </router-link>
          <!-- Header links -->
          <AppHeaderLinks
            :showModal="showModal"
            :isOpen="isOpen"
            class="text-center hidden"
          />
        </div>

        <!-- Small screen hamburger menu -->
        <div class="lg:hidden">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="focus:outline-none py-2"
            aria-label="Hamburger Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-9 w-9 fill-current text-primary"
            >
              <path
                v-if="isOpen"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
              <path
                v-if="!isOpen"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Header links -->
      <AppHeaderLinks
        :showModal="showModal"
        :isOpen="isOpen"
        class="text-center lg:hidden"
      />

      <!-- Header right section buttons -->
      <div class="hidden lg:flex justify-between items-center gap-4 flex-col lg:flex-row">
        <!-- Hire me button -->
        <div class="lg:block">
          <router-link
            to="/auth/login"
            class="text-md font-general-regular bg-primary-light text-[14px] hover:text-primary text-gray-500 mr-2 duration-300"
          >
            Login
          </router-link>
          <!-- </div> -->
          <span class="h-3 border-r border-gray-300 border-1"></span>
          <!-- <div class=" md:block "> -->
          <router-link
            to="/auth/register"
            class="text-md font-general-regular bg-primary-light text-[14px] hover:text-primary text-gray-500 ml-2 duration-300"
          >
            Sign Up
          </router-link>
        </div>
        <div class="lg:block">
          <Button
            title="Post A Job"
            class="text-md font-general-regular bg-primary text-white text-[14px] shadow-sm rounded-md px-4 py-2 duration-300"
            @click="showModal()"
            aria-label="Get Package"
          />
        </div>

        <!-- Theme switcher large screen -->
        <!-- <theme-switcher
					:theme="theme"
					@themeChanged="updateTheme"
					class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"
				/> -->
      </div>
    </div>

    <!-- Hire me modal -->
    <!-- <HireMeModal
      :showModal="showModal"
      :modal="modal"
      :categories="categories"
      aria-modal="Hire Me Modal"
    /> -->
  </nav>
</template>

<style scoped>
#nav a.router-link-exact-active {
  @apply text-indigo-700;
  @apply dark:text-indigo-400;
  @apply font-medium;
}
.logo {
  width: 70%;
}
@media only screen and (max-width: 425px) {
  .logo {
    width: 50%;
  }
}
</style>
