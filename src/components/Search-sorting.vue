<script></script>

<template>
  <div>
    <!-- search section -->
    <div class="flex flex-col justify-center items-center brand-linear-bg" style="">
      <div class="my-12 text-3xl text-white md:text-5xl">
        <h3 class="font-semibold leading-[40px] md:leading-[60px] text-center text-white">
          Explore and discover<br />
          the right job for you!
        </h3>
      </div>
      <div class="w-full bg-brand-tertiary py-6 md:py-auto">
        <div class="mx-14 my-0">
          <form
            method="GET"
            action="https://www.jobberman.com/jobs"
            accept-charset="UTF-8"
            class="search_form flex flex-col items-center md:flex-row w-full"
          >
            <input type="hidden" id="authenticated" value="false" />
            <input type="hidden" id="userRole" value="guest" />
            <select
              class="w-full h-10 pl-2 text-gray-500 rounded-md border border-gray-300 hover:border-gray-400 focus:border-gray-400 placeholder-gray-400 focus:placeholder-gray-900 mb-3 w-full md:mb-0 md:mr-3"
              style=""
              name="job_function[]"
              aria-label="Select a job function"
            >
              <option value="">All Job Functions</option>
              <option value="accounting-auditing-finance">
                Accounting, Auditing &amp; Finance
              </option>
            </select>
            <select
              class="w-full h-10 pl-2 text-gray-500 rounded-md border border-gray-300 hover:border-gray-400 focus:border-gray-400 placeholder-gray-400 focus:placeholder-gray-900 mb-3 w-full md:mb-0 md:mr-3"
              style=""
              name="industry"
              aria-label="Select an industry"
            >
              <option value="">All Industries</option>
              <option value="advertising-media-communications">
                Advertising, Media &amp; Communications
              </option>
            </select>
            <select
              class="w-full h-10 pl-2 text-gray-500 rounded-md border border-gray-300 hover:border-gray-400 focus:border-gray-400 placeholder-gray-400 focus:placeholder-gray-900 mb-3 w-full md:mb-0 md:mr-3"
              style=""
              name="location[]"
              aria-label="Select a location"
            >
              <option value="">All Locations</option>
            </select>
            <button
              type="submit"
              class="flex items-center justify-center appearance-none font-medium text-center rounded-md text-base py-3 lg:py-2 px-6 bg-primary text-white focus:shadow-pri hover:bg-pri-hover w-full lg:w-1/2"
            >
              <span class="mr-2" data-cy="search-button-top">Find a Job</span>
            </button>
          </form>
        </div>
      </div>
      <div
        class="container flex relative flex-col mt-10 mb-12"
        id="recent-searches-slider"
      >
        <h3 class="mb-6 text-left text-brand-opaque">Popular searches</h3>

        <div class="relative w-full">
          <!-- <div
            class="flex absolute top-0 h-full left-arrow-container"
            style="display: none"
          >
            <button class="absolute left-0 z-10 h-full text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 19L8 12L15 5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div> -->
          <div class="overflow-x-hidden mx-auto">
            <div class="whitespace-nowrap overflow-x-auto" style="">
              <a
                class="select-none inline-block text-white capitalize bg-brand-tertiary rounded-md mr-2 px-4 py-2.5 whitespace-nowrap"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline mr-4"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
                    fill="white"
                  ></path>
                </svg>
                <span>Advertising, Media &amp; Communications</span>
              </a>
              <a
                class="select-none inline-block text-white capitalize bg-brand-tertiary rounded-md mr-2 px-4 py-2.5 whitespace-nowrap"
                ><svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline mr-4"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
                    fill="white"
                  ></path></svg
                ><span>NGO, NPO &amp; Charity</span></a
              >
              <a
                class="select-none inline-block text-white capitalize bg-brand-tertiary rounded-md mr-2 px-4 py-2.5 whitespace-nowrap"
                ><svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline mr-4"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
                    fill="white"
                  ></path></svg
                ><span>Full Time</span></a
              ><a
                class="select-none inline-block text-white capitalize bg-brand-tertiary rounded-md mr-2 px-4 py-2.5 whitespace-nowrap"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline mr-4"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
                    fill="white"
                  ></path>
                </svg>
                <span>Contract</span>
              </a>
              <a
                class="select-none inline-block text-white capitalize bg-brand-tertiary rounded-md mr-2 px-4 py-2.5 whitespace-nowrap"
                ><svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline mr-4"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
                    fill="white"
                  ></path>
                </svg>
                <span>Healthcare</span>
              </a>
              <a
                class="select-none inline-block text-white capitalize bg-brand-tertiary rounded-md mr-2 px-4 py-2.5 whitespace-nowrap"
                ><svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline mr-4"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
                    fill="white"
                  ></path></svg
                ><span>Abuja</span></a
              ><a
                class="select-none inline-block text-white capitalize bg-brand-tertiary rounded-md mr-2 px-4 py-2.5 whitespace-nowrap"
                ><svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline mr-4"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
                    fill="white"
                  ></path></svg
                ><span>Remote (Work From Home)</span></a
              ><a
                class="select-none inline-block text-white capitalize bg-brand-tertiary rounded-md mr-2 px-4 py-2.5 whitespace-nowrap"
                ><svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline mr-4"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
                    fill="white"
                  ></path></svg
                ><span>Rest of Nigeria</span></a
              ><a
                class="select-none inline-block text-white capitalize bg-brand-tertiary rounded-md mr-2 px-4 py-2.5 whitespace-nowrap"
                ><svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline mr-4"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
                    fill="white"
                  ></path></svg
                ><span>IT &amp; Telecoms</span></a
              ><a
                class="select-none inline-block text-white capitalize bg-brand-tertiary rounded-md mr-2 px-4 py-2.5 whitespace-nowrap"
                ><svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline mr-4"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
                    fill="white"
                  ></path></svg
                ><span>Lagos</span></a
              >
            </div>
          </div>
          <!-- <div class="right-arrow-container absolute top-0 flex right-[-24px] h-full">
            <button class="absolute right-0 z-10 h-full text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5L16 12L9 19"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/*Mobile*/
.right-arrow-container {
  left: 100%;
}
/* .brand-linear-bg {
  background: linear-gradient(95.54deg, #6013ab 0.2%, #46008b 38.18%, #1b2095 94.08%);
} */
.right-arrow-container:before {
  background: linear-gradient(to right, rgb(243 244 246 / 0%), #1c2095 100%);
  height: 100%;
  content: "";
  pointer-events: none;
  width: 50px;
  position: absolute;
  right: 0;
}

.left-arrow-container {
  left: 0;
}

.left-arrow-container:after {
  background: linear-gradient(to right, #580aa1, rgb(243 244 246 / 0%) 100%);
  height: 100%;
  content: "";
  pointer-events: none;
  width: 50px;
  position: absolute;
}

/*Desktop*/
@media screen and (min-width: 768px) {
  .right-arrow-container:before {
    width: 147px;
    position: absolute;
    right: 0;
    background: linear-gradient(to right, rgb(243 244 246 / 0%), #1e1e95 100%);
  }

  .left-arrow-container:after {
    width: 147px;
    background: linear-gradient(to right, #5c10a6, rgb(243 244 246 / 0%) 100%);
    position: absolute;
    left: 0;
  }

  .right-arrow-container {
    right: 0;
  }

  .left-arrow-container {
    left: 0;
  }
}
</style>
