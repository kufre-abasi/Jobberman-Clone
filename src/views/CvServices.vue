<script>
export default {
  name: "Defult",
  components: {},
  data() {
    return {
      containerClasses: ["bg-image"],
      packagesData: [
        {
          name: "silver",
          price: "NGN 40,000",
          isCoverLetterIncluded: false,
          borderColor: "border-gray-300",
          stripColor: "bg-gray-300",
          packageFeatures: [
            {
              name: "Professional Written CV (Nigeria):",
              details:
                "A top-standard, well-tailored CV that showcases your strengths and achievements to suit the specific industry you are in, or trying to enter. This package includes a standard and professionally written Nigerian CV.",
            },
            {
              name: "Up to 3 Revisions on your order:",
              details:
                "You can give us feedback on your first draft, and we’ll make the needed adjustments. Up to 3 revisions.",
            },
            {
              name: "Turnaround Time (3 Working Days):",
              details:
                "The first draft of your CV will be sent to you within 3 working days.",
            },
          ],
        },
        {
          name: "gold",
          price: "NGN 100,000",
          isCoverLetterIncluded: true,
          borderColor: "border-[#E1CB00]",
          stripColor: "bg-[#E1CB00]",
          packageFeatures: [
            {
              name: "Professional Written CV (International):",
              details:
                "In line with prevalent foreign job opportunities, you can choose a foreign country's CV format. We will style and tailor your CV to a foreign format: Australia, Canada, UK, and UAE CV formats.",
            },
            {
              name: "Up to 3 Revisions on your order:",
              details:
                "You can give us feedback on your first draft, and we’ll make the needed adjustments. Up to 3 revisions.",
            },
            {
              name: "Cover Letter: ",
              details:
                "Employers are more likely to read a CV with a cover letter. We will help you with a perfectly tailored one.",
            },
            {
              name: "Turnaround Time (5 Working Days):",
              details:
                "The first draft of your CV will be sent to you within 5 working days.",
            },
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <div class="">
    <div class="bg-gray-700 h-[1200px] md:h-[680px] py-20 block lg:relative">
      <h1
        class="pt-10 mb-11 text-3xl font-general-variable text-center text-white md:text-4xl"
      >
        <span class="">
          Jobberman CV Services <br />
          <span class="block font-general-variable pt-2.5">
            Increase Your Interview Chances Today!
          </span>
        </span>
        <span class="block md:hidden mb-2.5">
          Jobberman CV <br />
          Services <br />
          <span class="block text-2xl font-general-variable pt-3 md:pt-2.5">
            Increase Your Interview <br />
            Chances Today!
          </span>
        </span>
      </h1>

      <div class="grid grid-cols-1 gap-5 items-start lg:grid-cols-3 mx-[60px]">
        <div
          class="flex overflow-hidden relative flex-col justify-center items-center px-4 py-5 sm:pt-0"
        >
          <div
            class="flex justify-center items-center w-24 h-24 rounded-full bg-brand-secondary"
          >
            <svg
              width="51"
              height="50"
              viewBox="0 0 51 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.4167 10.4167H13C10.6989 10.4167 8.83337 12.2822 8.83337 14.5833V37.5C8.83337 39.8012 10.6989 41.6667 13 41.6667H35.9167C38.2179 41.6667 40.0834 39.8012 40.0834 37.5V27.0833M37.1371 7.47039C38.7643 5.8432 41.4025 5.8432 43.0297 7.47039C44.6568 9.09757 44.6568 11.7358 43.0297 13.3629L25.1426 31.25H19.25L19.25 25.3574L37.1371 7.47039Z"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <h4 class="capitalize text-lg font-general-semibold my-3.5 text-white">
            step 1:
          </h4>
          <p class="text-center text-white">
            Select the package you want.<br />
            You will then need to tell us a<br />
            little bit more about yourself.<br />
            Click 'Submit' when you are<br />
            done.
          </p>
        </div>
        <div
          class="flex overflow-hidden relative flex-col justify-center items-center px-4 py-5 sm:pt-0"
        >
          <div
            class="flex justify-center items-center w-24 h-24 rounded-full bg-brand-secondary"
          >
            <svg
              width="51"
              height="50"
              viewBox="0 0 51 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3106 28.106C19.7248 27.5202 18.7751 27.5202 18.1893 28.106C17.6035 28.6918 17.6035 29.6415 18.1893 30.2273L20.3106 28.106ZM23.4166 33.3333L22.356 34.394C22.9418 34.9798 23.8915 34.9798 24.4773 34.394L23.4166 33.3333ZM32.8106 26.0607C33.3964 25.4749 33.3964 24.5251 32.8106 23.9393C32.2248 23.3536 31.2751 23.3536 30.6893 23.9393L32.8106 26.0607ZM38.5833 14.5833V39.5833H41.5833V14.5833H38.5833ZM35.9166 42.25H15.0833V45.25H35.9166V42.25ZM12.4166 39.5833V14.5833H9.41663V39.5833H12.4166ZM15.0833 11.9167H19.25V8.91667H15.0833V11.9167ZM31.75 11.9167H35.9166V8.91667H31.75V11.9167ZM15.0833 42.25C13.6105 42.25 12.4166 41.0561 12.4166 39.5833H9.41663C9.41663 42.7129 11.9537 45.25 15.0833 45.25V42.25ZM38.5833 39.5833C38.5833 41.0561 37.3894 42.25 35.9166 42.25V45.25C39.0462 45.25 41.5833 42.7129 41.5833 39.5833H38.5833ZM41.5833 14.5833C41.5833 11.4537 39.0462 8.91667 35.9166 8.91667V11.9167C37.3894 11.9167 38.5833 13.1106 38.5833 14.5833H41.5833ZM12.4166 14.5833C12.4166 13.1106 13.6105 11.9167 15.0833 11.9167V8.91667C11.9537 8.91667 9.41663 11.4537 9.41663 14.5833H12.4166ZM18.1893 30.2273L22.356 34.394L24.4773 32.2727L20.3106 28.106L18.1893 30.2273ZM24.4773 34.394L32.8106 26.0607L30.6893 23.9393L22.356 32.2727L24.4773 34.394ZM23.4166 7.75H27.5833V4.75H23.4166V7.75ZM27.5833 13.0833H23.4166V16.0833H27.5833V13.0833ZM23.4166 13.0833C21.9439 13.0833 20.75 11.8894 20.75 10.4167H17.75C17.75 13.5463 20.287 16.0833 23.4166 16.0833V13.0833ZM30.25 10.4167C30.25 11.8894 29.0561 13.0833 27.5833 13.0833V16.0833C30.7129 16.0833 33.25 13.5463 33.25 10.4167H30.25ZM27.5833 7.75C29.0561 7.75 30.25 8.94391 30.25 10.4167H33.25C33.25 7.28705 30.7129 4.75 27.5833 4.75V7.75ZM23.4166 4.75C20.287 4.75 17.75 7.28705 17.75 10.4167H20.75C20.75 8.94391 21.9439 7.75 23.4166 7.75V4.75Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <h4 class="capitalize text-lg font-general-semibold my-3.5 text-white">
            step 2:
          </h4>
          <p class="text-center text-white">
            You can choose to pay via<br />
            bank transfer or online
          </p>
        </div>
        <div
          class="flex overflow-hidden relative flex-col justify-center items-center px-4 py-5 sm:pt-0"
        >
          <div
            class="flex justify-center items-center w-24 h-24 rounded-full bg-brand-secondary"
          >
            <svg
              width="51"
              height="50"
              viewBox="0 0 51 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.7499 31.25L27.5832 41.6667L19.2499 18.75L42.1666 27.0833L31.7499 31.25ZM31.7499 31.25L42.1666 41.6667M15.4754 4.66359L17.093 10.7006M11.2004 16.5932L5.16333 14.9755M29.5618 8.43811L25.1424 12.8575M13.3575 24.6424L8.93803 29.0618"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <h4 class="capitalize text-lg font-general-semibold my-3.5 text-white">
            step 3:
          </h4>
          <p class="text-center text-white">
            Once your payment is<br />
            confirmed, We will begin<br />
            working on your order.
          </p>
        </div>
      </div>
      <div class="lg:absolute block w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 mx-[50px] gap-6">
          <div class="p-10 py-20 drop-shadow-md bg-white rounded-lg">
            <button
              class="w-full bg-primary rounded text-white py-4 font-general-regular"
            >
              Add To Cart
            </button>
            <div class="mt-4 font-general-variable">What's Included</div>
          </div>
          <div class="p-10 py-20 drop-shadow-md bg-white rounded-lg">
            <button
              class="w-full bg-primary rounded text-white py-4 font-general-regular"
            >
              Add To Cart
            </button>
            <div class="mt-4 font-general-variable">What's Included</div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-44">
      <h1 class="font-general-semibold text-4xl text-center mb-10">How It Works</h1>
      <div class="grid grid-cols-1 gap-5 lg:grid-cols-3 items-start">
        <div
          class="flex overflow-hidden relative flex-col justify-center items-center py-5 sm:pt-0"
        >
          <div
            class="flex justify-center items-center w-24 h-24 rounded-full bg-brand-secondary"
          >
            <svg
              width="51"
              height="50"
              viewBox="0 0 51 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.75 43.75V35.4167M6.75 35.4167V10.4167C6.75 8.11548 8.61548 6.25 10.9167 6.25H24.4583L26.5417 8.33333H44.25L38 20.8333L44.25 33.3333H26.5417L24.4583 31.25H10.9167C8.61548 31.25 6.75 33.1155 6.75 35.4167ZM25.5 7.29167V18.75"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <h4 class="capitalize text-lg font-semibold my-3.5 text-gray-700">step 1:</h4>
          <p class="text-center text-gray-500">
            Select the package you want.<br />
            You will then need to tell us a<br />
            little bit more about yourself.<br />
            Click 'Submit' when you are<br />
            done.
          </p>
        </div>
        <div
          class="flex overflow-hidden lg:relative flex-col justify-center items-center py-5 sm:pt-0"
        >
          <div
            class="flex justify-center items-center w-24 h-24 rounded-full bg-brand-secondary"
          >
            <svg
              width="51"
              height="50"
              viewBox="0 0 51 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.75 20.8334H44.25M15.0833 31.25H17.1667M25.5 31.25H27.5833M13 39.5834H38C41.4518 39.5834 44.25 36.7851 44.25 33.3334V16.6667C44.25 13.2149 41.4518 10.4167 38 10.4167H13C9.54822 10.4167 6.75 13.2149 6.75 16.6667V33.3334C6.75 36.7851 9.54822 39.5834 13 39.5834Z"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <h4 class="capitalize text-lg font-semibold my-3.5 text-gray-700">step 2:</h4>
          <p class="text-center text-gray-500">
            You can choose to pay via<br />
            bank transfer or online
          </p>
        </div>
        <div
          class="flex overflow-hidden relative flex-col justify-center items-center py-5 sm:pt-0"
        >
          <div
            class="flex justify-center items-center w-24 h-24 rounded-full bg-brand-secondary"
          >
            <svg
              width="51"
              height="50"
              viewBox="0 0 51 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.25 25L23.4167 29.1667L31.75 20.8333M44.25 25C44.25 35.3553 35.8553 43.75 25.5 43.75C15.1447 43.75 6.75 35.3553 6.75 25C6.75 14.6447 15.1447 6.25 25.5 6.25C35.8553 6.25 44.25 14.6447 44.25 25Z"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <h4 class="capitalize text-lg font-semibold my-3.5 text-gray-700">step 3:</h4>
          <p class="text-center text-gray-500">
            Once your payment is<br />
            confirmed, We will begin<br />
            working on your order.
          </p>
        </div>
      </div>
      <div class="mt-6 px-14 pb-10">
        <h4 class="text-center capitalize text-lg font-semibold my-3.5 text-gray-700">
          To request a revision of your CV
        </h4>
        <p class="text-center text-gray-500">
          After receiving your new CV (either the first, second or third draft version),
          you need to inform the writer within 3 working days, that you require changes.
          Your CV will then be updated and sent back to you within 3 working days.
        </p>
        <p class="text-center text-gray-500">
          A sales representative will contact you after you complete your order to answer
          any questions you may have.
        </p>
      </div>
    </div>
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
