
<script>
export default {
  components: {
    // ThemeSwitcher,
    // HireMeModal,
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
  },
};

</script>


<template>

    <header x-data="{ open: false }" class="flex relative sticky top-0 z-40 flex-col mx-auto w-full bg-white"><div class="flex z-40 px-4 w-full bg-white shadow lg:px-8"><div class="flex flex-col w-full h-16 bg-white lg:items-center lg:justify-between lg:flex-row"><div class="flex flex-row justify-between items-center w-full h-full whitespace-nowrap lg:justify-start"><a class="flex items-center h-full" href="https://www.jobberman.com"><img class="mr-10" loading="lazy" width="180" src="https://www.jobberman.com/static-assets/img/ng/landscape.svg" alt="Jobberman"></a><div class="flex flex-row justify-between items-center h-full"><div class="hidden z-50 lg:flex mx-2 lg:mx-3 xl:mx-6 items-center hover:border-b-2 hover:border-brand-primary hover:-mb-0.5 h-full"><div class="relative dropdown-parent"><button class="flex flex-row items-center py-2 mt-2 w-full text-sm text-gray-500 whitespace-nowrap md:w-auto md:inline md:mt-0 focus:text-brand-primary hover:text-brand-primary"><a href="https://www.jobberman.com/job-seeker">
Job Seekers
</a><svg fill="currentColor" viewBox="0 0 20 20" class="inline mt-1 ml-1 w-4 h-4 transition-transform duration-200 transform dropdown-indicator md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button><div class="absolute lg:pt-4 w-full rounded-md dropdown-child md-navbar:w-64 z-40"><div class="bg-white rounded-md" style="box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.05); z-index: 999;"><a href="https://www.jobberman.com/jobs" class="block px-4 py-2 mt-2 text-sm text-gray-500 rounded-t-md rounded-b-md lg:mt-0 hover:text-brand-primary hover:bg-tri-hover focus:text-brand-primary first:rounded-b-none last:rounded-md">
Job Vacancies
</a><a href="https://www.jobberman.com/account/cv-services" class="block px-4 py-2 mt-2 text-sm text-gray-500 border-t border-gray-300 border-1 lg:mt-0 hover:text-brand-primary hover:bg-tri-hover focus:text-brand-primary last:rounded-t-none last:rounded-md">
CV Review Services
</a><a href="https://www.jobberman.com/softskills" class="block px-4 py-2 mt-2 text-sm text-gray-500 border-t border-gray-300 border-1 lg:mt-0 hover:text-brand-primary hover:bg-tri-hover focus:text-brand-primary last:rounded-t-none last:rounded-md">
Soft Skills Training
</a><a href="/discover/job-search-advice" class="block px-4 py-2 mt-2 text-sm text-gray-500 border-t border-gray-300 border-1 lg:mt-0 hover:text-brand-primary hover:bg-tri-hover focus:text-brand-primary last:rounded-t-none last:rounded-md">
Job Search Advice
</a></div></div></div></div><div class="hidden z-50 lg:flex mx-2 lg:mx-3 xl:mx-6 items-center hover:border-b-2 hover:border-brand-primary hover:-mb-0.5 h-full"><div class="relative dropdown-parent"><button class="flex flex-row items-center py-2 mt-2 w-full text-sm text-gray-500 whitespace-nowrap md:w-auto md:inline md:mt-0 focus:text-brand-primary hover:text-brand-primary"><a href="/discover">
Career
</a><svg fill="currentColor" viewBox="0 0 20 20" class="inline mt-1 ml-1 w-4 h-4 transition-transform duration-200 transform dropdown-indicator md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button><div class="absolute lg:pt-4 w-full rounded-md dropdown-child md-navbar:w-64 z-40"><div class="bg-white rounded-md" style="box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.05); z-index: 999;"><a href="/discover/career-development" class="block px-4 py-2 mt-2 text-sm text-gray-500 rounded-t-md rounded-b-md lg:mt-0 hover:text-brand-primary hover:bg-tri-hover focus:text-brand-primary">
Career Development
</a><a href="/discover/life-at-work" class="block px-4 py-2 mt-2 text-sm text-gray-500 border-t border-b border-gray-300 border-1 lg:mt-0 hover:text-brand-primary hover:bg-tri-hover focus:text-brand-primary">
Life at Work
</a><a href="/discover/job-market-news" class="block px-4 py-2 mt-2 text-sm text-gray-500 rounded-b-md lg:mt-0 hover:text-brand-primary hover:bg-tri-hover focus:text-brand-primary">
Job Market News
</a></div></div></div></div><div class="hidden z-50 lg:flex mx-2 lg:mx-3 xl:mx-6 items-center hover:border-b-2 hover:border-brand-primary hover:-mb-0.5 h-full"><div class="relative dropdown-parent"><button class="flex flex-row items-center py-2 mt-2 w-full text-sm text-gray-500 whitespace-nowrap md:w-auto md:inline md:mt-0 focus:text-brand-primary hover:text-brand-primary"><a href="https://www.jobberman.com/employer">
Employers
</a><svg fill="currentColor" viewBox="0 0 20 20" class="inline mt-1 ml-1 w-4 h-4 transition-transform duration-200 transform dropdown-indicator md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button><div class="absolute lg:pt-4 w-full rounded-md dropdown-child md-navbar:w-64 z-40"><div class="bg-white rounded-md" style="box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.05); z-index: 999;"><a href="https://www.jobberman.com/employer/best-match" class="block px-4 py-2 mt-2 text-sm text-gray-500 rounded-t-md rounded-b-md lg:mt-0 hover:text-brand-primary hover:bg-tri-hover focus:text-brand-primary first:rounded-b-none last:rounded-md">
Best Match
</a><a href="https://www.jobberman.com/employer/skills-assessments" class="block px-4 py-2 mt-2 text-sm text-gray-500 rounded-t-md rounded-b-md lg:mt-0 hover:text-brand-primary hover:bg-tri-hover focus:text-brand-primary">
Skills Assessments
</a><a href="/discover/employers" class="block px-4 py-2 mt-2 text-sm text-gray-500 rounded-b-md border-t border-gray-300 border-1 lg:mt-0 hover:text-brand-primary hover:bg-tri-hover focus:text-brand-primary first:border-t-0 last:rounded-md">
Employers Corner
</a>
</div></div></div></div></div></div><div class="hidden flex-row justify-end items-center w-1/2 lg:flex lg:h-full"><a href="https://www.jobberman.com/account/login" data-cy="login-button-navbar" class="flex items-center mx-3 text-sm text-gray-500 cursor-pointer lg:mx-4 hover:text-brand-primary focus:text-brand-primary">
Log In
</a><span class="h-3 border-r border-gray-300 border-1"></span><a href="https://www.jobberman.com/account/sign-up" data-cy="sign-up-button-navbar" class="flex items-center mx-3 text-sm text-gray-500 cursor-pointer lg:mx-4 hover:text-brand-primary focus:text-brand-primary">
Sign Up
</a><a href="https://www.jobberman.com/account/employer/jobs/create" class="flex items-center justify-center appearance-none font-medium text-center rounded-md text-base py-3 lg:py-2 px-6 bg-pri-default text-white focus:shadow-pri hover:bg-pri-hover flex">
Post A Job
</a></div></div><button class="ml-auto rounded-md lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open"><svg x-show="!open" fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg><svg x-show="open" fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6" style="display: none;"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div><nav x-show="open" :class="{'flex': open, 'hidden': !open}" x-transition:enter="transition ease-out duration-150 transform" x-transition:enter-start="opacity-0 -translate-y-5" x-transition:enter-end="opacity-100 translate-y-0" x-transition:leave="transition ease-in duration-150 transform" x-transition:leave-start="opacity-100 translate-y-0" x-transition:leave-end="opacity-0 -translate-y-5" class="overflow-y-scroll absolute right-0 left-0 flex-col px-4 pt-20 w-full h-screen bg-white lg:hidden hidden" style="display: none;"><div class="flex flex-col justify-between"><div class="flex flex-row justify-between"><a href="https://www.jobberman.com/account/login" class="flex items-center justify-center appearance-none font-medium text-center rounded-md text-base py-3 lg:py-2 px-6 bg-pri-default text-white focus:shadow-pri hover:bg-pri-hover mr-1 w-full text-center">
Log In
</a><a href="https://www.jobberman.com/account/sign-up" class="flex items-center justify-center appearance-none font-medium text-center rounded-md text-base py-3 lg:py-2 px-6 bg-white border border-pri-default text-pri-default focus:shadow-sec hover:bg-sec-hover ml-1 w-full text-center">
Sign Up
</a></div><div class="flex flex-col py-5 space-y-5"><span class="flex flex-row items-center"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="#000000" class="i i--edit mr-2" role="presentation" aria-hidden="true"><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"></path></svg><a href="https://www.jobberman.com/account/employer/jobs/create" class="text-base font-medium text-gray-500">
Post A Job
</a></span><span class="flex flex-row items-center"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor" class="i i--search mr-2" role="presentation" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg><a href="https://www.jobberman.com/jobs" class="text-base font-medium text-gray-500">
Find a Job
</a></span></div><div class="flex flex-col"><div class="pb-4"><div class="py-2"><a href="https://www.jobberman.com/job-seeker" class="py-2 text-base font-medium text-brand-linked">
Job Seekers
</a></div><div class="flex flex-col pl-3 space-y-4 border-l-4 border-gray-300"><a href="https://www.jobberman.com/jobs" class="text-gray-500">
Job Vacancies
</a><a href="https://www.jobberman.com/account/cv-services" class="text-gray-500">
CV Review Services
</a><a href="https://www.jobberman.com/softskills" class="text-gray-500">
Soft Skills Training
</a><a href="/discover/job-search-advice" class="text-gray-500">
Job Search Advice
</a></div></div><div class="pb-4"><div class="py-2"><a href="/discover" class="py-2 text-base font-medium text-brand-linked">
Career
</a></div><div class="flex flex-col pl-3 space-y-4 border-l-4 border-gray-300"><a href="/discover/career-development" class="text-gray-500">
Career Development
</a><a href="/discover/life-at-work" class="text-gray-500">
Life at Work
</a><a href="/discover/job-market-news" class="text-gray-500">
Job Market News
</a></div></div><div class="pb-4"><div class="py-2"><a href="https://www.jobberman.com/employer" class="text-base font-medium text-brand-linked">
Employers
</a></div><div class="flex flex-col pl-3 space-y-4 border-l-4 border-gray-300"><a href="https://www.jobberman.com/employer/skills-assessments" class="text-gray-500">
Skills Assessments
</a><a href="https://www.jobberman.com/employer/best-match" class="text-gray-500">
Best Match
</a><a href="/discover/employers" class="text-gray-500">
Employers Corner
</a></div></div><div class="py-3"><span class="text-base text-brand-primary"><a href="https://www.jobberman.com/about#/contact-us">
Contact Us
</a></span></div></div></div></nav></header>
</template>