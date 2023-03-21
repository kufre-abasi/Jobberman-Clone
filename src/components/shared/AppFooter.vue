<script>
import feather from "feather-icons";
import FooterCopyright from "./FooterCopyright.vue";
// import Button from "../reusable/Button.vue";

export default {
  components: {
    FooterCopyright,
    //  Button
  },
  data() {
    return {};
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div
    class="bg-primary-light shadow-xl mt-0 px-8 lg:px-14 py-10"
    style="box-shadow: 0 0 4px rgba(0, 0, 0, 0.25)"
  >
    <div class="flex flex-col flex-wrap justify-between items-center w-full md:flex-row">
      <router-link class="py-2 text-sm text-primary" to="about"> About </router-link>
      <span class="hidden text-gray-300 gray-dash md:block">|</span>
      <router-link class="py-2 text-sm text-primary" to="/companies">
        Companies Hiring
      </router-link>
      <span class="hidden text-gray-300 gray-dash md:block">|</span>
      <router-link class="py-2 text-sm text-primary" to="/privacy-policy">
        Privacy Policy
      </router-link>
      <span class="hidden text-gray-300 md:block gray-dash">|</span>
      <router-link class="py-2 text-sm text-primary" to="/terms-and-conditions">
        Terms
      </router-link>
      <span class="hidden text-gray-300 gray-dash md:block">|</span>
      <router-link to="/cv-services" class="py-2 text-sm text-primary">
        CV Review Services
      </router-link>
      <span class="hidden text-gray-300 gray-dash md:block">|</span>
      <router-link to="/softskills" class="py-2 text-sm text-primary">
        Soft Skills Training
      </router-link>
      <span class="hidden text-gray-300 gray-dash md:block">|</span>
      <router-link to="/skills-assessments" class="py-2 text-sm text-primary">
        Skills Assessments
      </router-link>
      <span class="hidden text-gray-300 gray-dash md:block">|</span>
      <a
        class="py-2 text-sm text-primary"
        target="_blank"
        rel="noopener noreferrer"
        download=""
      >
        Banner Rate Card
      </a>
      <!-- <span class="hidden text-gray-300 gray-dash md:block">|</span> -->
    </div>
    <!--  -->
    <div class="flex flex-row justify-center md:justify-start">
      <span class="pt-5 text-sm text-gray-700"> Follow us On: </span>
    </div>

    <div class="flex flex-row justify-center md:justify-start items-center py-5 w-full">
      <a class="mr-4" href="https://www.facebook.com/jobbermannigeria">
        <img
          loading="lazy"
          src="../../assets/images/icon-facebook.a8ffd853.svg"
          alt="Follow us on Facebook"
          width="32"
          height="32"
        />
      </a>
      <a class="mr-4" href="https://www.instagram.com/jobbermannigeria/">
        <img
          loading="lazy"
          src="../../assets/images/icon-instagram.f94aacd6.svg"
          alt="Follow us on Instagram"
          width="32"
          height="32"
        />
      </a>
      <a class="mr-4" href="https://www.linkedin.com/company/jobberman">
        <img
          loading="lazy"
          src="../../assets/images/icon-linkedin.26a3db8e.svg"
          alt="Follow us on LinkedIn"
          width="32"
          height="32"
        />
      </a>
      <a class="mr-4" href="https://www.twitter.com/jobbermandotcom">
        <img
          loading="lazy"
          src="../../assets/images/icon-twitter.6b47ac5c.svg"
          alt="Follow us on Twitter"
          width="32"
          height="32"
        />
      </a>
      <a class="mr-0 md:mr-4" href="https://www.youtube.com/Jobbermandotcom">
        <img
          loading="lazy"
          src="../../assets/images/icon-youtube.bd29b086.svg"
          alt="Follow us on YouTube"
          width="32"
          height="32"
        />
      </a>
      <a
        class="hidden md:block"
        rel="noopener noreferrer"
        href="https://play.google.com/store/apps/details?id=com.jobberman&amp;utm_source=jobberman.com&amp;utm_campaign=google-play-badge&amp;pcampaignid=MKT-Other-global-all-co-prtnr-py-2artBadge-Mar2515-1"
      >
        <img
          loading="lazy"
          src="../../assets/images/play-badge.webp"
          alt="Get it on Google Play"
          width="180"
          height="70"
          style="width: 180px"
        />
      </a>
    </div>

    <!-- Footer copyright -->
    <FooterCopyright />
  </div>
</template>

<style scoped></style>
