<template>
  <div class="py-14">
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
  </div>
</template>
<script>
import SectionOne from "@/components/BestMatchComponents/SectionOne.vue";
import SectionTwo from "@/components/BestMatchComponents/SectionTwo.vue";
import SectionThree from "@/components/BestMatchComponents/SectionThree.vue";
import SectionFour from "../components/BestMatchComponents/SectionFour.vue";
import SectionFive from "@/components/BestMatchComponents/SectionFive.vue";
import SectionSix from "../components/BestMatchComponents/SectionSix.vue";
export default {
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
    SectionSix,
  },
  data: () => {
    return {};
  },
  mounted() {},
  updated() {},
};
</script>
