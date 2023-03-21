<template>
  <div class="px-6 md:px-14 mt-14">
    <div class="md:px-0 py-20 mx-auto md:pt-8 request-demo-form">
      <div class="flex flex-col items-center md:flex-row">
        <div class="flex flex-col space-y-6 w-full md:space-y-8 md:w-1/2">
          <h1 class="flex flex-col text-left">
            <span class="text-3xl font-medium text-gray-700 md:text-5xl">
              Test for the <b>Best!</b></span
            ><span class="mt-4 md:mt-6 md:w-2/3"
              ><span class="text-lg font-normal leading-6 text-gray-500"
                >Discover who has the right skills to do the job with</span
              >&nbsp;<span class="text-lg font-medium leading-6 text-gray-500"
                >Jobberman’s Skills Assessments</span
              >.
            </span>
          </h1>
          <div
            class="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6"
          >
            <a
              class="flex items-center justify-center appearance-none font-medium text-center rounded-md text-base py-3 lg:py-2 px-6 bg-primary text-white focus:shadow-pri hover:bg-pri-hover w-full md:w-auto"
            >
              Get Started
            </a>
          </div>
        </div>
        <div class="w-full md:w-1/2 mt-8 md:mt-0">
          <div class="md:flex flex-col justify-evenly w-full border rounded-lg">
            <div class="p-5">
              <form method="POST">
                <input name="_token" type="hidden" /><input
                  type="hidden"
                  value="assessment"
                  name="product"
                />
                <div class="flex flex-col">
                  <label
                    for="firstname"
                    class="block mb-1 text-sm font-medium text-left text-gray-700"
                  >
                    First Name </label
                  ><input
                    type="text"
                    class="h-10 py-3 px-2 border rounded-md hover:border-gray-400 focus:border-gray-400 text-gray-700 block w-full outline-none focus:ring-0 placeholder-gray-400 focus:placeholder-gray-400 font-normal border-gray-300 mb-4"
                    required
                    name="firstname"
                    value=""
                  />
                  <div class="text-red-500 text-sm err-msg" style="display: none"></div>
                </div>
                <div class="flex flex-col">
                  <label
                    for="lastname"
                    class="block mb-1 text-sm font-medium text-left text-gray-700"
                  >
                    Last Name </label
                  ><input
                    type="text"
                    class="h-10 py-3 px-2 border rounded-md hover:border-gray-400 focus:border-gray-400 text-gray-700 block w-full outline-none focus:ring-0 placeholder-gray-400 focus:placeholder-gray-400 font-normal border-gray-300 mb-4"
                    required
                    name="lastname"
                    value=""
                  />
                  <div class="text-red-500 text-sm err-msg" style="display: none"></div>
                </div>
                <div class="flex flex-col">
                  <label
                    for="email"
                    class="block mb-1 text-sm font-medium text-left text-gray-700"
                  >
                    Email Address </label
                  ><input
                    type="text"
                    class="h-10 py-3 px-2 border rounded-md hover:border-gray-400 focus:border-gray-400 text-gray-700 block w-full outline-none focus:ring-0 placeholder-gray-400 focus:placeholder-gray-400 font-normal border-gray-300 mb-4"
                    required
                    name="email"
                    value=""
                  />
                  <div class="text-red-500 text-sm err-msg" style="display: none"></div>
                </div>
                <div class="flex flex-col mb-4 w-full">
                  <label
                    for="mobile_number"
                    class="block mb-1 text-sm font-medium text-left text-gray-700"
                  >
                    Mobile Number
                  </label>
                  <div class="flex relative mt-1 rounded-md">
                    <select
                      class="w-full h-10 pl-2 text-gray-500 rounded-md border border-gray-300 hover:border-gray-400 focus:border-gray-400 placeholder-gray-400 focus:placeholder-gray-900 py-0 pr-7 pl-3 w-1/3 text-gray-500 bg-gray-200 rounded-r-none rounded-l-md border-gray-300 focus:ring-0 sm:text-sm"
                      style=""
                      required
                      name="mobile_number_country"
                    >
                      <option value="AF">Country Codes here</option>
                    </select>
                    <div class="text-red-500 text-sm err-msg" style="display: none"></div>
                    <input
                      type="text"
                      class="h-10 py-3 px-2 border rounded-md hover:border-gray-400 focus:border-gray-400 text-gray-700 block w-full outline-none focus:ring-0 placeholder-gray-400 focus:placeholder-gray-400 font-normal border-gray-300 block w-2/3 rounded-md rounded-l-none border-gray-300 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                      name="mobile_number"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div class="flex flex-col">
                    <label
                      for="company"
                      class="block mb-1 text-sm font-medium text-left text-gray-700"
                    >
                      Company Name </label
                    ><input
                      type="text"
                      class="h-10 py-3 px-2 border rounded-md hover:border-gray-400 focus:border-gray-400 text-gray-700 block w-full outline-none focus:ring-0 placeholder-gray-400 focus:placeholder-gray-400 font-normal border-gray-300 mb-4"
                      required
                      name="company"
                      value=""
                    />
                    <div class="text-red-500 text-sm err-msg" style="display: none"></div>
                  </div>
                  <div class="flex flex-col py-2">
                    <label
                      for="industry_id"
                      class="block mb-1 text-sm font-medium text-left text-gray-700"
                    >
                      Industry
                    </label>
                    <select
                      class="w-full h-10 pl-2 text-gray-500 rounded-md border border-gray-300 hover:border-gray-400 focus:border-gray-400 placeholder-gray-400 focus:placeholder-gray-900 mb-4"
                      style=""
                      required
                      name="industry_id"
                    >
                      <option value="">Select...</option>
                    </select>
                    <div class="text-red-500 text-sm err-msg" style="display: none"></div>
                  </div>
                  <div class="flex flex-col pb-2">
                    <label
                      for="user_type"
                      class="block mb-1 text-sm font-medium text-gray-700"
                    >
                      Are you an Employer or Job Seeker?
                    </label>
                    <select
                      class="w-full h-10 pl-2 text-gray-500 rounded-md border border-gray-300 hover:border-gray-400 focus:border-gray-400 placeholder-gray-400 focus:placeholder-gray-900 mb-4"
                      style=""
                      required
                      name="user_type"
                    >
                      <option value="">Select...</option>
                      <option value="0">Employer</option>
                      <option value="1">Job Seeker</option>
                    </select>
                    <div class="text-red-500 text-sm err-msg" style="display: none"></div>
                  </div>
                  <div class="flex flex-col py-2">
                    <button
                      type="submit"
                      class="flex items-center justify-center appearance-none font-medium text-center rounded-md text-base py-3 px-6 bg-primary text-white focus:shadow-pri hover:bg-pri-hover w-full capitalize"
                      id="reset-submit"
                    >
                      request a demo
                    </button>
                  </div>
                  <div class="py-2 mx-auto w-2/3 text-sm text-center">
                    <span class="text-sm leading-5 font-medium text-gray-400"
                      >By clicking "Request a Demo", you agree to our</span
                    >&nbsp;<a href="/terms" style="color: #2485af"
                      >Terms &amp; Conditions</a
                    >&nbsp;<span class="text-sm leading-5 font-medium text-gray-400"
                      >and</span
                    >&nbsp;<a href="/privacy-policy" style="color: #2485af"
                      >Privacy Policy</a
                    >
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
