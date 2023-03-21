<template>
  <div class="bg-white">
    <div class="px-6 md:px-14">
      <div class="pt-14 pb-14 mx-auto">
        <div class="w-full text-left md:text-center">
          <span class="text-2xl md:text-3xl font-medium text-gray-700">
            How Do You Analyse Results of the Assessments?
          </span>
        </div>
        <div class="flex flex-row">
          <div class="grid grid-cols-1 md:grid-cols-2 pt-8">
            <div class="flex flex-col">
              <span
                class="text-xl md:text-2xl leading-8 font-medium text-left text-gray-700"
              >
                Using our Applicant Tracking System (ATS): </span
              ><span class="text-base leading-6 font-normal text-left text-gray-500 pt-4">
                You can compare candidates by performance on the ‘Candidates’ section of
                the ATS. Here, you will get a breakdown of how each candidate
                performed.<br /><br />
                You can also sort candidates based on assessment scores, and create
                candidate pools based on scoring buckets.<br /><br />
                You can also click on the ‘assessment’ button to download the individual
                assessment report for each candidate.
              </span>
            </div>
            <div class="flex flex-col">
              <img
                class="pt-20 md:pt-0 flex mx-auto"
                src="https://www.jobberman.com/static-assets/img/ng/ats-laptop.png"
                loading="lazy"
                alt="laptop"
                width="500"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-row">
          <div class="grid grid-cols-1 md:grid-cols-2 pt-8">
            <div class="hidden md:flex md:flex-col">
              <img
                class="flex mx-auto my-5 shadow-xl"
                src="https://www.jobberman.com/static-assets/img/ng/skills-assessment-results.png"
                loading="lazy"
                alt="results"
                width="500"
              />
            </div>
            <div class="flex flex-col text-left">
              <span
                class="text-2xl leading-8 font-medium text-gray-700 md:mx-auto md:w-2/3 pt-11 md:pt-10"
              >
                Using Individual Assessment Reports: </span
              ><span
                class="text-base leading-6 font-normal text-gray-500 pt-8 md:pt-4 md:mx-auto md:w-2/3"
              >
                The individual assessment reports have detailed information on how the
                candidate performed on each section of the test, enabling you to know what
                areas of discipline the candidate is strongest. </span
              ><span
                class="text-2xl leading-8 font-medium text-gray-700 pt-8 md:pt-4 md:text-left md:mx-auto md:w-2/3"
              >
                Scoring Methodology: </span
              ><span
                class="text-base leading-6 font-normal text-gray-500 pt-8 md:pt-4 md:text-left md:mx-auto md:w-2/3"
              >
                We have created four levels of segments for scoring, to make it easy for
                you to distinguish groups of similar performing candidates. </span
              ><a
                href="https://www.jobberman.com/account/employer/jobs/assessment-catalogue"
                class="flex items-center justify-center appearance-none font-medium text-center rounded-md text-base py-3 lg:py-2 px-6 bg-primary text-white focus:shadow-pri hover:bg-pri-hover mx-auto mt-8 md:mt-4 w-full md:w-2/3 capitalize"
                data-propensity-label="skills-assessments-guest"
              >
                view assessment catalogue
              </a>
            </div>
            <div class="flex flex-col md:hidden">
              <img
                class="flex mt-14 drop-shadow-xl"
                src="https://www.jobberman.com/static-assets/img/ng/skills-assessment-results.png"
                loading="lazy"
                alt="results"
                width="500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
