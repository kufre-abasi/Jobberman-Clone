<template>
  <div>
    <div :class="containerClasses">
      <div class="px-6 md:px-14">
        <div class="flex pt-10 pb-14 mx-auto md:px-0">
          <div class="flex flex-col w-full">
            <div class="flex flex-col w-full shadow md:flex-row">
              <div
                class="flex flex-col p-5 w-full text-left bg-white md:w-2/3"
                style="border-radius: 8px 8px"
              >
                <span class="text-2xl font-medium text-gray-700 pb-4">
                  Try Skills Assessment Today </span
                ><span class="text-base leading-6 font-normal text-gray-700">
                  You decrease the time spent on sorting through the huge volume of
                  applications from jobseekers. You can sort through job seekers based on
                  test scores they achieve. </span
                ><span
                  class="text-base leading-6 font-medium line-right text-brand-secondary pt-5"
                >
                  Assessments available for these categories
                </span>
                <div
                  class="flex flex-col md:grid md:grid-cols-3 pt-0 md:pt-4 md:gap-y-5 md:gap-x-8"
                >
                  <div class="flex col-span-1 items-center pt-4 md:pt-0">
                    <span class="">
                      <svg
                        viewBox="0 0 24 24"
                        class="i i--check fill-brand-secondary"
                        width="18"
                        height="18"
                        role="presentation"
                        aria-hidden="true"
                      >
                        <path
                          d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z"
                        ></path></svg></span
                    ><span class="ml-2 text-base leading-5 font-normal text-gray-700">
                      Finance
                    </span>
                  </div>
                  <div class="flex col-span-1 items-center pt-4 md:pt-0">
                    <span class="text-primary">
                      <svg
                        viewBox="0 0 24 24"
                        class="i i--check fill-brand-secondary"
                        width="18"
                        height="18"
                        role="presentation"
                        aria-hidden="true"
                      >
                        <path
                          d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z"
                        ></path></svg></span
                    ><span class="ml-2 text-base leading-5 font-normal text-gray-700">
                      IT &amp; Software
                    </span>
                  </div>
                  <div class="flex col-span-1 items-center pt-4 md:pt-0">
                    <span class="text-primary">
                      <svg
                        viewBox="0 0 24 24"
                        class="i i--check fill-brand-secondary"
                        width="18"
                        height="18"
                        role="presentation"
                        aria-hidden="true"
                      >
                        <path
                          d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z"
                        ></path></svg></span
                    ><span class="ml-2 text-base leading-5 font-normal text-gray-700">
                      Admin &amp; Office
                    </span>
                  </div>
                  <div class="flex col-span-1 items-center pt-4 md:pt-0">
                    <span class="text-primary"
                      ><svg
                        viewBox="0 0 24 24"
                        class="i i--check fill-brand-secondary"
                        width="18"
                        height="18"
                        role="presentation"
                        aria-hidden="true"
                      >
                        <path
                          d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z"
                        ></path></svg></span
                    ><span class="ml-2 text-base leading-5 font-normal text-gray-700">
                      Marketing &amp; Comms
                    </span>
                  </div>
                  <div class="flex col-span-1 items-center pt-4 md:pt-0">
                    <span class="text-primary"
                      ><svg
                        viewBox="0 0 24 24"
                        class="i i--check fill-brand-secondary"
                        width="18"
                        height="18"
                        role="presentation"
                        aria-hidden="true"
                      >
                        <path
                          d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z"
                        ></path></svg></span
                    ><span class="ml-2 text-base leading-5 font-normal text-gray-700">
                      Human Resources
                    </span>
                  </div>
                  <div class="flex col-span-1 items-center pt-4 md:pt-0">
                    <span class="text-primary"
                      ><svg
                        viewBox="0 0 24 24"
                        class="i i--check fill-brand-secondary"
                        width="18"
                        height="18"
                        role="presentation"
                        aria-hidden="true"
                      >
                        <path
                          d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z"
                        ></path></svg></span
                    ><span class="ml-2 text-base leading-5 font-normal text-gray-700">
                      Customer Service &amp; Support
                    </span>
                  </div>
                  <div class="flex col-span-1 items-center pt-4 md:pt-0">
                    <span class="text-primary"
                      ><svg
                        viewBox="0 0 24 24"
                        class="i i--check fill-brand-secondary"
                        width="18"
                        height="18"
                        role="presentation"
                        aria-hidden="true"
                      >
                        <path
                          d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z"
                        ></path></svg></span
                    ><span class="ml-2 text-base leading-5 font-normal text-gray-700">
                      Product &amp; Project Management
                    </span>
                  </div>
                  <div class="flex col-span-1 items-center pt-4 md:pt-0">
                    <span class="text-primary"
                      ><svg
                        viewBox="0 0 24 24"
                        class="i i--check fill-brand-secondary"
                        width="18"
                        height="18"
                        role="presentation"
                        aria-hidden="true"
                      >
                        <path
                          d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z"
                        ></path></svg></span
                    ><span class="ml-2 text-base leading-5 font-normal text-gray-700">
                      Engineering &amp; Technology
                    </span>
                  </div>
                  <div class="flex col-span-1 items-center pt-4 md:pt-0">
                    <span class="text-primary"
                      ><svg
                        viewBox="0 0 24 24"
                        class="i i--check fill-brand-secondary"
                        width="18"
                        height="18"
                        role="presentation"
                        aria-hidden="true"
                      >
                        <path
                          d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z"
                        ></path></svg></span
                    ><span class="ml-2 text-base leading-5 font-normal text-gray-700">
                      Transport &amp; Logistics
                    </span>
                  </div>
                  <div class="flex col-span-1 items-center pt-4 md:pt-0">
                    <span class="text-primary"
                      ><svg
                        viewBox="0 0 24 24"
                        class="i i--check fill-brand-secondary"
                        width="18"
                        height="18"
                        role="presentation"
                        aria-hidden="true"
                      >
                        <path
                          d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z"
                        ></path></svg></span
                    ><span class="ml-2 text-base leading-5 font-normal text-gray-700"
                      ><b>And More...</b></span
                    >
                  </div>
                </div>
              </div>
              <div
                class="flex flex-col p-5 w-full text-center md:w-1/3 bg-gray-200"
                style="border-radius: 8px 8px"
              >
                <div class="flex flex-col my-auto">
                  <span class="text-2xl font-medium text-gray-900"> NGN 32000.00 </span
                  ><span class="text-base font-normal text-black pt-2">
                    Including VAT </span
                  ><span class="text-sm leading-5 font-normal text-grey-500 pt-4">
                    Log in or Sign up to view more about this product
                  </span>
                  <div class="flex flex-col pt-4">
                    <router-link
                      to="/auth/login"
                      class="flex items-center justify-center appearance-none font-medium text-center rounded-md text-base py-3 lg:py-2 px-6 bg-primary text-white focus:shadow-pri hover:bg-pri-hover pt-2 w-full"
                    >
                      Login and add to cart </router-link
                    ><router-link to="/auth/register" class="pt-2" style="color: #2485af">
                      Sign Up
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      containerClasses: ["bg-image"],
    };
  },
};
</script>

;

<style>
.bg-image {
  background-image: url(../../assets/images/stripe-background.9ac050ec.jpg);
  background-size: cover;
  background-color: #9e9c9c;
  background-blend-mode: overlay;
}
</style>
