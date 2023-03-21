<template>
  <!--  <div> 
<template> -->
  <div
    class="mt-16 py-4 w-full bg-gray-100 shadow transition duration-300 md:block no-plain-mode"
  >
    <div class="px-14 my-0 min-h-[70px] flex items-center">
      <form class="search_form flex flex-col items-center md:flex-row w-full">
        <input type="hidden" id="authenticated" value="false" />
        <input type="hidden" id="userRole" value="guest" />
        <div class="mr-4 text-gray-700 whitespace-nowrap">Find a Job</div>
        <select
          class="w-full h-10 pl-2 text-gray-500 rounded-md border border-gray-300 hover:border-gray-400 focus:border-gray-400 placeholder-gray-400 focus:placeholder-gray-900 mb-3 w-full md:mb-0 md:mr-3"
          name="job_function[]"
          aria-label="Select a job function"
          v-model="selectedJobFunction"
        >
          <option value="">All Job Functions</option>
          <option
            v-for="(jobFunction, index) in jobFunctions"
            :key="index"
            :value="jobFunction.value"
          >
            {{ jobFunction.label }}
          </option>
        </select>
        <select
          class="w-full h-10 pl-2 text-gray-500 rounded-md border border-gray-300 hover:border-gray-400 focus:border-gray-400 placeholder-gray-400 focus:placeholder-gray-900 mb-3 w-full md:mb-0 md:mr-3"
          name="industry"
          aria-label="Select an industry"
          v-model="selectedIndustry"
        >
          <option value="">All Industries</option>
          <option
            v-for="(industry, index) in industries"
            :key="index"
            :value="industry.value"
          >
            {{ industry.label }}
          </option>
        </select>
        <button
          type="submit"
          class="flex items-center justify-center appearance-none font-medium text-center rounded-md text-base py-3 lg:py-2 px-6 bg-primary text-white focus:shadow-pri hover:bg-pri-hover w-full lg:w-1/2"
        >
          <span class="mr-2" data-cy="search-button-top">Search</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageYOffset: 0,
      showFilter: true,
      selectedJobFunction: "",
      selectedIndustry: "",
      jobFunctions: [
        { label: "Accounting, Auditing & Finance", value: "accounting-auditing-finance" },
        { label: "Admin & Office", value: "admin-office" },
        { label: "Building & Architecture", value: "building-architecture" },
        { label: "Community & Social Services", value: "community-social-services" },
        { label: "Consulting & Strategy", value: "consulting-strategy" },
        { label: "Creative & Design", value: "creative-design" },
        { label: "Customer Service & Support", value: "customer-service-support" },
        { label: "Driver & Transport Services", value: "driver-transport-services" },
        { label: "Engineering & Technology", value: "engineering-technology" },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Handle scroll event here
    },
    handleSubmit(event) {
      const form = event.target;

      const getValue = (name) => {
        if (form[name]) {
          if (form[name].type) {
            if (["select-one", "text", "hidden"].indexOf(form[name].type) > -1) {
              return form[name].value;
            } else if (
              ["checkbox", "radio"].indexOf(form[name].type) > -1 &&
              form[name].checked
            ) {
              return form[name].value;
            }
          } else if (form[name].length) {
            return form[name].value;
          }
        }
        return "";
      };

      const jobFunction = getValue("job_function[]") || getValue("job_function");
      const industry = getValue("industry[]") || getValue("industry");
      const location = getValue("location[]") || getValue("location");
      const workType = getValue("work_type");
      const term = getValue("q");
      const sortBy = getValue("sort_by");

      const authenticated = document.getElementById("authenticated").value;
      let toUrl = "";
      if (industry.trim() && jobFunction.trim()) {
        const segments = [jobFunction, location, workType].filter((x) => x);
        toUrl = `${segments.join("/")}?industry=${industry}`;
        if (authenticated === "true") {
          toUrl += `&authenticated=${Date.now()}`;
        }
      } else {
        const segments = [jobFunction, industry, location, workType].filter((x) => x);
        toUrl = segments.join("/");
        if (authenticated === "true") {
          toUrl += `?authenticated=${Date.now()}`;
        }
      }

      if (term.trim()) {
        toUrl += `${toUrl.indexOf("?") === -1 ? "?" : "&"}q=${encodeURI(
          term.replace(" ", "+")
        )}`;
      }

      if (sortBy.trim()) {
        toUrl += `${toUrl.indexOf("?") === -1 ? "?" : "&"}sort=${sortBy}`;
      }

      const wholeUrl = `${form.getAttribute("action")}/${toUrl.toLocaleLowerCase()}`;
      window.location.assign(wholeUrl.replace(/\/$/, ""));
    },
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
