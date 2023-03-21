<script>
import image from "@/assets/images/job-search-advice/image.webp";
export default {
  data() {
    return {
      advices: [
        {
          image: image,
          advice: "Become a Part of the Lagos Labour Market Disruption",
        },
        {
          image: image,
          advice: "Jobberman Soft Skills Training Participants on its Impact",
        },
        {
          image: image,
          advice: "Practical Strategies for getting a New Job in 2023",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="lg:px-40 px-8 py-20 bg-content-background">
    <div class="">
      <div class="flex flex-wrap">
        <div class="">
          <routter-link to="/">
            <span style="vertical-align: middle" class="">
              <router-link to="/" class="text-priamry">
                <svg
                  viewBox="0 0 24 24"
                  class="i i--home"
                  fill="none"
                  width="22"
                  height="22"
                  role="presentation"
                  aria-hidden="true"
                >
                  <path
                    d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z"
                    stroke="currentColor"
                  ></path>
                </svg>
              </router-link>
            </span>
          </routter-link>
        </div>
        <span aria-hidden="true" class="pt-2 pb-0 p-2" style="vertical-align: middle">
          <svg
            width="12"
            height="12"
            viewBox="0 0 8 10"
            xmlns="http://www.w3.org/2000/svg"
            class="fill-current ringier-bread-crumbs-wrap-separator fa-chevron-right"
          >
            <path
              d="M1.27216 0.91369L1.18174 0.818966L1.09132 0.913691L0.90958 1.10408L0.827195 1.19039L0.90958 1.2767L4.46359 5L0.909581 8.7233L0.827196 8.80961L0.909581 8.89592L1.09132 9.08631L1.18174 9.18103L1.27216 9.08631L5.09042 5.08631L5.17281 5L5.09042 4.91369L1.27216 0.91369Z"
            ></path>
          </svg>
        </span>
        <div class="flex">
          <span class="font-general-regular">
            <router-link to="">Resource Centre</router-link>
          </span>
          <span aria-hidden="true" class="pt-2 pb-0 p-2" style="vertical-align: middle">
            <svg
              width="12"
              height="12"
              viewBox="0 0 8 10"
              xmlns="http://www.w3.org/2000/svg"
              class="fill-current ringier-bread-crumbs-wrap-separator fa-chevron-right"
            >
              <path
                d="M1.27216 0.91369L1.18174 0.818966L1.09132 0.913691L0.90958 1.10408L0.827195 1.19039L0.90958 1.2767L4.46359 5L0.909581 8.7233L0.827196 8.80961L0.909581 8.89592L1.09132 9.08631L1.18174 9.18103L1.27216 9.08631L5.09042 5.08631L5.17281 5L5.09042 4.91369L1.27216 0.91369Z"
              ></path>
            </svg>
          </span>
          <span class="font-general-regular" aria-current="page">Job Search Advice</span>
        </div>
      </div>
    </div>
    <div class="my-8">
      <div class="text-center">
        <span class="text-4xl text-gray-700 font-general-regular">Job Search Advice</span>
      </div>
      <div class="">
        <p class="font-general-regular text-lg pt-2">
          Expert advice on making the most of your job-hunting; acing interviews, writing
          CVs and standing out to get your ideal job.
        </p>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-6">
      <div v-for="advice in advices" :key="advice" class="bg-white">
        <div class="">
          <img width="378" height="198" :src="advice.image" alt="" />
        </div>
        <div class="text-left pt-2 pb-4 px-2">
          <span class="font-general-medium leading-[25px] text-2xl text-gray-500">
            {{ advice.advice }}
          </span>
        </div>
      </div>
    </div>

    <!-- form -->

    <div class="newsletter-main my-10">
      <form class="">
        <div class="flex gap-4 bg-[#eee] drop-shadow-md rounded-sm p-8">
          <div class="text-left">
            <div class="font-general-regular text-[24px] pb-2 text-gray-500">
              Stay Updated
            </div>
            <div class="font-general-regular text-[16px] text-gray-500">
              Join our newsletter and get the latest job listings and career insights
              delivered straight to your inbox.
            </div>
          </div>
          <div class="newsletter-input-wrapper font-general-regular">
            <div class="newsletter-name mb-4">
              <input
                class="rounded-sm border-[2px] p-2 border-[#eee]"
                type="text"
                id="newsletter_first_name"
                placeholder="First Name"
                required=""
              />
            </div>
            <div class="newsletter-email">
              <input
                class="rounded-sm border-[2px] p-2 border-[#eee]"
                type="text"
                id="email_field"
                name="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="newsletter-last-wrapper">
            <div class="newsletter-radio-wrapper flex gap-4">
              <div class="newsletter-radio-btn-one newsletter-radio flex">
                <input
                  class="mx-2"
                  id="newsletter-type-a"
                  name="type"
                  type="radio"
                  value="jobseeker"
                />
                <label for="newsletter-type-a"> Jobseeker </label>
              </div>
              <div class="newsletter-radio-btn-two newsletter-radio flex">
                <input
                  class="mx-2"
                  id="newsletter-type-b"
                  name="type"
                  type="radio"
                  value="employer"
                />
                <label for="newsletter-type-b"> Employer </label>
              </div>
            </div>
            <div class="newsletter-action">
              <div class="relative ingier-newsletter-button-wrapper">
                <input
                  class="newsletter-subscribe-btn bg-gray-800 absolute top-[40px] left-[0px] text-white w-full p-2 rounded-sm newsletter-subscribe-btn alertsSubscribe__button"
                  type="submit"
                  value="Subscribe"
                  id="bttnsubmit"
                  disabled=""
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="grid grid-cols-3 gap-6 mb-10">
      <div v-for="advice in advices" :key="advice" class="bg-white">
        <div class="">
          <img width="378" height="198" :src="advice.image" alt="" />
        </div>
        <div class="text-left pt-2 pb-4 px-2">
          <span class="font-general-medium leading-[25px] text-2xl text-gray-500">
            {{ advice.advice }}
          </span>
        </div>
      </div>
    </div>

    <div class="ringier-push-notification bg-white drop-shadow-md p-4 mb-10">
      <div class="push-content">
        <div class="onesignal-signal-img-wrapper">
          <img
            src="https://www.jobberman.com/discover/wp-content/themes/jmng-child-theme/assets/images/onesignal-icon-bmke.jpg"
            height="70"
            width="70"
            alt="Notification Bell"
          />
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-6 mb-10">
      <div v-for="advice in advices" :key="advice" class="bg-white">
        <div class="">
          <img width="378" height="198" :src="advice.image" alt="" />
        </div>
        <div class="text-left pt-2 pb-4 px-2">
          <span class="font-general-medium leading-[25px] text-2xl text-gray-500">
            {{ advice.advice }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
