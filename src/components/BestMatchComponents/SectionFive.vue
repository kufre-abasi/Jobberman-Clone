<template>
  <div :class="containerClasses">
    <div class="px-6 md:px-14">
      <div class="flex flex-col mx-auto mb-10 w-full md:flex-row">
        <div class="flex justify-center w-full md:w-1/3">
          <img
            src="https://www.jobberman.com/static-assets/img/ng/best-match-candidate-image.png"
            loading="lazy"
            alt="candidate-image"
            width="300"
          />
        </div>
        <div
          class="flex flex-col pt-12 w-full md:grid md:grid-cols-3 md:gap-y-5 md:gap-x-8 md:w-2/3"
        >
          <div class="flex col-span-1 justify-center items-center pb-8 md:pb-0">
            <div class="hidden md:flex">
              <img
                src="https://www.jobberman.com/static-assets/img/ng/schneider-electric-logo.png"
                loading="lazy"
                alt="company-logo"
              />
            </div>
            <div class="flex md:hidden">
              <img
                class="h-8 w-fit"
                src="https://www.jobberman.com/static-assets/img/ng/schneider-electric-logo.png"
                loading="lazy"
                alt="company-logo"
              />
            </div>
          </div>
          <div class="flex col-span-1 justify-center items-center pb-8 md:pb-0">
            <div class="hidden md:flex">
              <img
                src="https://www.jobberman.com/static-assets/img/ng/pwc-logo.png"
                loading="lazy"
                alt="company-logo"
              />
            </div>
            <div class="flex md:hidden">
              <img
                class="h-8 w-fit"
                src="https://www.jobberman.com/static-assets/img/ng/pwc-logo.png"
                loading="lazy"
                alt="company-logo"
              />
            </div>
          </div>
          <div class="flex col-span-1 justify-center items-center pb-8 md:pb-0">
            <div class="hidden md:flex">
              <img
                src="https://www.jobberman.com/static-assets/img/ng/samsung-logo.png"
                loading="lazy"
                alt="company-logo"
              />
            </div>
            <div class="flex md:hidden">
              <img
                class="h-8 w-fit"
                src="https://www.jobberman.com/static-assets/img/ng/samsung-logo.png"
                loading="lazy"
                alt="company-logo"
              />
            </div>
          </div>
          <div class="flex col-span-1 justify-center items-center pb-8 md:pb-0">
            <div class="hidden md:flex">
              <img
                src="https://www.jobberman.com/static-assets/img/ng/tek-experts-logo.png"
                loading="lazy"
                alt="company-logo"
              />
            </div>
            <div class="flex md:hidden">
              <img
                class="h-8 w-fit"
                src="https://www.jobberman.com/static-assets/img/ng/tek-experts-logo.png"
                loading="lazy"
                alt="company-logo"
              />
            </div>
          </div>
          <div class="flex col-span-1 justify-center items-center pb-8 md:pb-0">
            <div class="hidden md:flex">
              <img
                src="https://www.jobberman.com/static-assets/img/ng/airtel-logo.png"
                loading="lazy"
                alt="company-logo"
              />
            </div>
            <div class="flex md:hidden">
              <img
                class="h-8 w-fit"
                src="https://www.jobberman.com/static-assets/img/ng/airtel-logo.png"
                loading="lazy"
                alt="company-logo"
              />
            </div>
          </div>
          <div class="flex col-span-1 justify-center items-center pb-8 md:pb-0">
            <div class="hidden md:flex">
              <img
                src="https://www.jobberman.com/static-assets/img/ng/andela-logo.png"
                loading="lazy"
                alt="company-logo"
              />
            </div>
            <div class="flex md:hidden">
              <img
                class="h-8 w-fit"
                src="https://www.jobberman.com/static-assets/img/ng/andela-logo.png"
                loading="lazy"
                alt="company-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      containerClasses: ["bg-image"],
    };
  },
};
</script>

;

<style>
.bg-image {
  background-image: url(../../assets/images/stripe-background.9ac050ec.jpg);
  background-size: cover;
  background-color: #9e9c9c;
  background-blend-mode: overlay;
}
</style>
