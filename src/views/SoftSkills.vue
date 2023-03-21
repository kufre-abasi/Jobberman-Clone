<template>
  <div>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
    <SectionSeven />
  </div>
</template>
<script>
import SectionOne from "@/components/SoftSkillsComponents/SectionOne.vue";
import SectionTwo from "@/components/SoftSkillsComponents/SectionTwo.vue";
import SectionThree from "@/components/SoftSkillsComponents/SectionThree.vue";
import SectionFour from "../components/SoftSkillsComponents/SectionFour.vue";
import SectionFive from "@/components/SoftSkillsComponents/SectionFive.vue";
import SectionSix from "../components/SoftSkillsComponents/SectionSix.vue";
import SectionSeven from "../components/SoftSkillsComponents/SectionSeven.vue";
export default {
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
    SectionSix,
    SectionSeven,
  },
  data: () => {
    return {};
  },
  mounted() {},
  updated() {},
};
</script>
