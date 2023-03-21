<script>
// import feather from 'feather-icons';
import SearchSorting from "@/components/Search-sorting.vue";

export default {
  components: {
    SearchSorting,
  },

  name: "Home",
  data: () => {
    return {};
  },
  created() {},
  mounted() {
    // feather.replace();
  },
  updated() {
    // feather.replace();
  },
  methods: {},
};
</script>

<template>
  <section class="sm:flex-row my-11 w-auto">
    <div class="flex w-full min-h-fit py-2 pt-4 bg-gray-200">
      <div class="mx-14 flex flex-col lg:flex-row my-auto">
        <div class="flex items-center mb-4 lg:mb-0 lg:pr-4">
          <span class="bg-primary h-fit p-2 rounded-md mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              class="&quot;&quot;"
              role="presentation"
              aria-hidden="true"
            >
              <path
                d="M11 5.88218V19.2402C11 20.2121 10.2121 21 9.24018 21C8.49646 21 7.83302 20.5325 7.58288 19.8321L5.43647 13.6829M18 13C19.6569 13 21 11.6569 21 10C21 8.34315 19.6569 7 18 7M5.43647 13.6829C4.0043 13.0741 3 11.6543 3 10C3 7.79086 4.79086 6 6.99999 6H8.83208C12.9327 6 16.4569 4.7659 18 3L18 17C16.4569 15.2341 12.9327 14 8.83208 14L6.99998 14C6.44518 14 5.91677 13.887 5.43647 13.6829Z"
                stroke="#FFFFFF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
          <div class="my-auto">
            <span class="text-gray-700 text-sm lg:text-base"
              >Real Hiring Results. Zero Cost.
            </span>
            <span class="text-primary">
              <a
                href="https://www.jobberman.com/account/employer/jobs/create#/post-a-job-basic-listing"
                >Post your Job openings For FREE on Jobberman</a
              >
            </span>
            <span class="text-primary">
              &nbsp;
              <a href=""></a>
            </span>
          </div>
        </div>
        <div class="w-full lg:w-auto hidden">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center appearance-none font-medium text-center rounded-md text-xs lg:text-sm py-3 lg:py-2 px-6 bg-tri-default text-pri-default focus:shadow-pri hover:bg-tri-hover"
          ></a>
        </div>
      </div>
    </div>

    <SearchSorting />
  </section>
</template>

<style scoped>
@media screen and (max-width: 320px) {
  section {
    padding-top: 25px;
    /* height: 50%; */
  }
}
.btn {
  background: #022c0c;
  color: #fdfdfd;
}
.btn:hover {
  background: #3cff76;
}
.cutom-border {
  border: 30% 70% 70% 30% / 30% 30% 70% 70%;
}

.text-color {
  color: #02801df8;
  text-shadow: #fcfdfd 2px;
  /* -webkit-text-stroke: 0.25px #3cff76; */
}
</style>
