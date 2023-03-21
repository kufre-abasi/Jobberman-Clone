<template>
  <section class="px-5 md:px-10">
    <div
      class="flex flex-col items-center gap-8 py-5 mx-auto my-12 text-center rounded-lg"
    >
      <h4 class="text-3xl not-italic font-semibold leading-9 tracking-normal">
        Frequently Asked Questions
      </h4>
      <div class="relative inline-block rounded-md">
        <img
          class="object-cover h-[100px] rounded-md"
          src="../../assets/images/faq.webp"
          alt=""
        />
        <div
          @click="
            currentVideoId = 'wSL4SD_GvgQ';
            YTPlayer.launch(currentVideoId);
          "
          class="absolute top-0 left-0 z-10 flex cursor-pointer items-center justify-center w-full h-full bg-[#00000033]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 64 64"
            fill="none"
            class="i i--play rounded-full"
            role="presentation"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.0004 57.6C46.1389 57.6 57.6004 46.1385 57.6004 32C57.6004 17.8615 46.1389 6.40002 32.0004 6.40002C17.8619 6.40002 6.40039 17.8615 6.40039 32C6.40039 46.1385 17.8619 57.6 32.0004 57.6ZM30.5754 22.9375C29.5935 22.2828 28.3309 22.2218 27.2904 22.7787C26.2499 23.3355 25.6004 24.4199 25.6004 25.6V38.4C25.6004 39.5802 26.2499 40.6645 27.2904 41.2214C28.3309 41.7782 29.5935 41.7172 30.5754 41.0626L40.1754 34.6626C41.0657 34.0691 41.6004 33.07 41.6004 32C41.6004 30.9301 41.0657 29.931 40.1754 29.3375L30.5754 22.9375Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
