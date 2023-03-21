<script>
import Jobsearchbar from "../components/Jobsearchbar.vue";
import Jobs from "../components/Jobs.vue";
export default {
  name: "Defult",
  components: {
      Jobsearchbar,
    Jobs
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
      <Jobsearchbar />  
      <Jobs />
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
