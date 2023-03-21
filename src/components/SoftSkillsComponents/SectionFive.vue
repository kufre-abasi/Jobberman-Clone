<template>
  <div class="py-20">
    <section class="max-w-5xl px-5 py-10 mx-auto xl:px-0">
      <div
        class="flex flex-col items-start justify-between gap-4 md:items-center md:gap-0 md:flex-row mb-14"
      >
        <div class="text-left">
          <span
            class="text-sm not-italic font-medium leading-5 tracking-normal text-left mb-6 text-gray-400"
            >IMPACT STORIES</span
          >
          <h2
            class="text-3xl mt-[24px] not-italic font-semibold leading-9 tracking-normal text-left"
          >
            What other learners are saying
          </h2>
        </div>
        <a
          href="https://www.youtube.com/watch?v=COJrB8ImMLc&amp;list=PLv6TYJfIPjZnSYxAHGlnpAlxmF1Lz4hEv"
          target="__blank"
          class="inline-flex items-center px-4 py-2 font-medium bg-white border rounded-md border-primary text-primary hover:bg-brand-opaque focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >Watch More Stories</a
        >
      </div>
      <div class="block overflow-x-scroll md:gap-16 md:flex whitespace-nowrap">
        <div
          class="relative inline-block w-3/4 mr-16 rounded-md last:mr-0 md:p-0 md:m-0 md:w-1/3"
        >
          <img
            class="object-cover w-full rounded-md"
            src="../../assets/images/youtube-01.webp"
            alt=""
          />
          <div
            data-flyout-target=".lightbox"
            @click="
              currentVideoId = 'q50ZengNRpI';
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
        <div
          class="relative inline-block w-3/4 mr-16 rounded-md last:mr-0 md:p-0 md:m-0 md:w-1/3"
        >
          <img
            class="object-cover w-full rounded-md"
            src="../../assets/images/youtube-02.webp"
            alt=""
          />
          <div
            data-flyout-target=".lightbox"
            @click="
              currentVideoId = 'COJrB8ImMLc';
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
        <div
          class="relative inline-block w-3/4 mr-16 rounded-md last:mr-0 md:p-0 md:m-0 md:w-1/3"
        >
          <img
            class="object-cover w-full rounded-md"
            src="../../assets/images/youtube-03.webp"
            alt=""
          />
          <div
            data-flyout-target=".lightbox"
            @click="
              currentVideoId = 'd0F2INAhXt4';
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
  </div>
</template>

<script>
export default {};
</script>

<style></style>
