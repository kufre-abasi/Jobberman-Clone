<script>
import AppBanner from "@/components/shared/AppBanner.vue";
import CompanyHiring from "@/components/CompanyHiring.vue";
import banner from "@/components/banner.vue";
import ForEmployee from "@/components/ForEmployee.vue";
import ExploreJobLinks from "@/components/ExploreJobLinks.vue";
export default {
  name: "Defult",
  components: {
    AppBanner,
    CompanyHiring,
    banner,
    ForEmployee,
    ExploreJobLinks,
  },
  data() {
    return {
      containerClasses: ["bg-image"],
    };
  },
};
</script>

<template>
  <div class="">
    <!-- <div :class="containerClasses" class="p-10 m:p-16"> -->
    <AppBanner class="" />
    <CompanyHiring />
    <banner />
    <ForEmployee />
    <ExploreJobLinks />
  </div>
</template>

<style scoped>
.bg-image {
  /* background-image: url(../assets/images/blackhub.jpg); */
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.418);
  background-blend-mode: overlay;
}
</style>
