<template>
  <div class="px-4 md:px-14">
    <div>
      <nav class="w-full rounded-md py-3 px-4 md:px-0 mt-3 mb-5">
        <ol class="flex flex-wrap text-sm list-reset">
          <li>
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
          </li>
          <li>
            <span class="mx-4 text-gray-500">/</span>
          </li>
          <li class="text-gray-500">Search results</li>
        </ol>
      </nav>
    </div>

    <div class="md:flex md:justify-between">
      <div class="w-full md:w-8/12 md:mr-5">
        <div
          class="text-left p-5 mb-10 bg-white md:rounded-lg border-y md:border border-gray-300 hover:border-gray-400"
        >
          <h1
            class="flex-grow-0 flex-shrink-0 mb-7 text-2xl font-medium text-gray-700 capitalize basis-full"
          >
            jobs in Nigeria
          </h1>
          <div
            class="flex flex-col flex-grow-0 flex-shrink-0 md:items-center md:flex-row basis-full"
          >
            <div class="text-lg capitalize">
              <span class="pr-2 text-gray-500">
                <span class="font-medium">
                  <span class="text-primary pr-2">1353</span>
                </span>
                Jobs Found
              </span>
            </div>
            <div class="flex mt-4 w-full md:w-auto md:mt-0 md:ml-auto">
              <a
                href="https://www.jobberman.com/account/customer/alerts/create"
                class="flex items-center justify-center appearance-none font-medium text-center rounded-md text-base py-3 lg:py-2 px-6 bg-primary text-white focus:shadow-pri hover:bg-pri-hover w-full capitalize md:w-auto"
              >
                Create job alert
              </a>
            </div>
          </div>
        </div>

        <h2
          class="mt-7 mb-5 px-5 md:px-0 text-2xl text-left font-medium tracking-wide text-gray-700 capitalize"
        >
          Featured Jobs
        </h2>

        <div
          class="mx-5 md:mx-0 flex flex-wrap col-span-1 mb-5 bg-white rounded-lg border border-gray-300 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500"
          data-cy="listing-cards-components"
        >
          <div class="flex flex-grow-0 flex-shrink-0 w-full">
            <div
              class="flex-1 flex items-center justify-between px-5 py-3 rounded-tr-md w-full pr-5"
            >
              <div class="w-full">
                <div class="flex items-center">
                  <a
                    href=""
                    class="relative mb-3 text-lg font-medium break-words focus:outline-none metrics-apply-now text-primary text-loading-animate"
                    title="Software Engineering Intern"
                  >
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-lg font-medium break-words text-primary">
                      Software Engineering Intern
                    </p>
                  </a>
                </div>
                <p class="text-sm text-primary text-left">
                  <a
                    rel=""
                    href=""
                    class="text-loading-animate text-loading-animate-link"
                  >
                    Diversiboard
                  </a>
                </p>
                <div class="flex flex-wrap mt-3 text-sm text-gray-500 md:py-0">
                  <span
                    class="mb-3 px-3 py-1 rounded bg-brand-opaque mr-2 text-loading-hide"
                  >
                    Remote (Work From Home)
                  </span>
                  <span
                    class="mb-3 px-3 py-1 rounded bg-brand-opaque mr-2 text-loading-hide"
                  >
                    Full Time
                  </span>
                  <span
                    class="mb-3 px-3 py-1 rounded bg-brand-opaque mr-2 text-loading-hide"
                  >
                    NGN
                    <span class="mr-1"> 250,000 - 400,000 </span>
                  </span>
                </div>
                <p
                  class="text-sm float-left text-left text-gray-500 text-loading-animate inline-block"
                >
                  Job Function : Software &amp; Data
                </p>
              </div>
            </div>
          </div>
          <div
            class="flex flex-row items-start items-center px-5 py-3 w-full border-t border-gray-300"
          >
            <p class="ml-auto text-sm font-normal text-gray-700 text-loading-animate">
              1 month ago
            </p>
          </div>
          <div
            class="flex flex-col flex-grow-0 flex-shrink-0 justify-start w-full items-center px-5 py-3 border-t border-gray-300 md:flex-row basis-full"
          >
            <div class="relative bottom-[42px] md:bottom-0">
              <div class="mr-6 flex-shrink-0">
                <a>
                  <div
                    class="flex justify-center items-center p-1 w-[50px] h-[50px] align-middle bg-white rounded-md border-2 border-gray-300"
                  >
                    <img
                      class="w-[90%] h-[90%] object-contain transition-opacity duration-200 ease-in rounded"
                      src="https://i.roamcdn.net/kazi/ng/hq/2a71adec1d92c5ca05303e642bfd1aa9/-/advertiser-img-ng-jobs-prod/dealer-images/advid276256/adv276256_1647729457.jpg"
                      loading="lazy"
                      alt="Diversiboard"
                      width="85"
                      height="85"
                    />
                  </div>
                </a>
              </div>
            </div>
            <p class="text-sm font-normal text-gray-700 md:text-gray-500 md:pl-5">
              Interested in a full-time, paid remote 8 - 12 week internship with a company
            </p>
          </div>
        </div>

        <!-- // view more

                    <div class="relative flex py-5 items-center mb-5">
                    <div class="flex-grow border-t border-gray-300"></div>
                    <span class="flex-shrink text-gray-300">
                    <a href="" class="w-[200px] py-[9px] px-[13px] justify-center items-center rounded-full border border-gray-300 bg-white text-blue-600 font-normal text-sm flex">
                    <svg class="mr-2" width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 1V5M5.5 5V9M5.5 5H9.5M5.5 5L1.5 5" stroke="#0091FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    View More
                    </a>
                    </span>
                    <div class="flex-grow border-t border-gray-300"></div>
                    </div> -->
      </div>

      <div class="w-full md:w-4/12">
        <div
          class="overflow-y-auto fixed inset-0 z-50 w-full md:relative md:z-0 hidden md:block"
        >
          <div class="flex justify-end p-4 bg-gray-100 md:hidden">
            <button>
              <svg
                viewBox="0 0 24 24"
                class="i i--close"
                width="20"
                height="20"
                role="presentation"
                aria-hidden="true"
              >
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                  stroke="currentColor"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="block w-full h-full bg-white border border-gray-300 md:rounded-lg hover:border-gray-400"
          >
            <div class="px-5 pt-5 pb-1 text-lg text-gray-700">Filter Results</div>
            <form class="sidebar-filter-form search_form">
              <div class="flex justify-between items-center px-5 pb-5 border-b">
                <div class="relative w-full">
                  <div
                    class="flex absolute inset-y-0 left-0 items-center text-primay pl-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      fill="none"
                      class="i i--search ml-1"
                      role="presentation"
                      aria-hidden="true"
                    >
                      <path
                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                        stroke="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <input
                    autocomplete="off"
                    type="text"
                    class="h-10 py-3 px-2 box-border rounded-md hover:border-gray-400 focus:border-gray-400 text-gray-700 block w-full outline-none focus:ring-0 placeholder-gray-400 focus:placeholder-gray-400 font-normal border-gray-300 pl-10 w-full js-autocomplete"
                    placeholder="Search"
                    aria-label="Keyword Search"
                    name="q"
                    value=""
                    id="side-search"
                  />
                  <div>
                    <div>
                      <div
                        class="absolute overflow-auto bg-white shadow-lg w-[320px] border bg-white shadow-xl rounded z-[999]"
                      >
                        <template
                          ><button
                            class="text-left py-2 whitespace-nowrap px-4 block w-full rounded hover:bg-gray-100"
                            type="button"
                          ></button>
                        </template>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  class="flex items-center justify-center appearance-none font-medium text-center rounded-md text-base py-3 lg:py-2 px-6 bg-white border border-primary text-primary focus:shadow-sec hover:bg-sec-hover ml-2"
                  style="padding: 8px 9px"
                  id="job-search-btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="22"
                    viewBox="0 0 24 24"
                    width="22"
                    fill="none"
                    class="i i--search text-primary"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <path
                      d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                      stroke="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="bg-white rounded-none border-b border-gray-200 accordion-item">
                <button
                  class="accordion-header flex relative items-center py-4 px-5 w-full text-base font-medium text-left text-gray-700 bg-white border-0 transition accordion-button hover:z-10 focus:z-20 focus:outline-none rounded-none collapsed"
                  type="button"
                >
                  Job Function
                  <svg
                    fill="none"
                    viewBox="0 0 20 20"
                    class="inline float-right text-right mt-1 ml-1 w-5 h-5 transition-transform duration-200 transform md:-mt-1 rotate-0"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="bg-white rounded-none border-b border-gray-200 accordion-item">
                <button
                  class="accordion-header flex relative items-center py-4 px-5 w-full text-base font-medium text-left text-gray-700 bg-white border-0 transition accordion-button hover:z-10 focus:z-20 focus:outline-none rounded-none collapsed"
                  type="button"
                >
                  Industry
                  <svg
                    fill="black"
                    viewBox="0 0 20 20"
                    class="inline mt-1 ml-1 w-5 h-5 transition-transform duration-200 transform md:-mt-1 rotate-0"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="bg-white rounded-none border-b border-gray-200 accordion-item">
                <button
                  class="accordion-header flex relative items-center py-4 px-5 w-full text-base font-medium text-left text-gray-700 bg-white border-0 transition accordion-button hover:z-10 focus:z-20 focus:outline-none rounded-none collapsed"
                  type="button"
                >
                  Location
                  <svg
                    fill="black"
                    viewBox="0 0 20 20"
                    class="inline mt-1 ml-1 w-5 h-5 transition-transform duration-200 transform md:-mt-1 rotate-0"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="bg-white rounded-none border-b border-gray-200 accordion-item">
                <button
                  class="accordion-header flex relative items-center py-4 px-5 w-full text-base font-medium text-left text-gray-700 bg-white border-0 transition accordion-button hover:z-10 focus:z-20 focus:outline-none rounded-none collapsed"
                  type="button"
                >
                  Work Type
                  <svg
                    fill="black"
                    viewBox="0 0 20 20"
                    class="inline mt-1 ml-1 w-5 h-5 transition-transform duration-200 transform md:-mt-1 rotate-0"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="bg-white rounded-none border-b border-gray-200 accordion-item">
                <button
                  class="accordion-header flex relative items-center py-4 px-5 w-full text-base font-medium text-left text-gray-700 bg-white border-0 transition accordion-button hover:z-10 focus:z-20 focus:outline-none rounded-none rounded-b-none"
                  type="button"
                >
                  Order By
                  <svg
                    fill="black"
                    viewBox="0 0 20 20"
                    class="inline mt-1 ml-1 w-5 h-5 transition-transform duration-200 transform md:-mt-1 rotate-[180deg]"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="p-5">
                <a
                  class="flex items-center justify-center appearance-none font-medium text-center rounded-md text-base py-3 lg:py-2 px-6 bg-white border border-primary text-primary focus:shadow-sec hover:bg-sec-hover block w-full text-center"
                >
                  Reset Filter
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
