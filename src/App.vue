<script>
// import feather from "feather-icons";
import AppHeader from "@/components/shared/AppHeader.vue";
import AppFooter from "@/components/shared/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data: () => {
    return {};
  },
  mounted() {
    // feather.replace();
  },
  updated() {
    // feather.replace();
  },
};
</script>

<template>
  <div id="app" class="pt-0.5">
    <!-- <PageLoader /> -->
    <AppHeader />

    <!-- Render active component contents with vue transition -->
    <!-- <transition name="fade" mode="out-in">
      <router-view />
    </transition> -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <AppFooter />

    <!-- Scroll to top -->
    <back-to-top visibleoffset="500" right="30px" bottom="20px" class="shadow-lg">
      <i data-feather="chevron-up"></i>
    </back-to-top>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.vue-back-to-top {
  @apply p-2   text-white transition
        duration-500
        ease-in-out
        transform bg-primary
        hover:-translate-y-1 hover:scale-110;
  border-radius: 5%;
  font-size: 22px;
  line-height: 22px;
}

.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.4s;
}
.border-color {
  border-bottom: solid 2px var(--brand-primary);
}
.text-color {
  color: #022c0c;
  text-shadow: #fcfdfd 2px;
  /* -webkit-text-stroke: 0.25px #3cff76; */
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
/* width */
::-webkit-scrollbar {
  display: none;
}
</style>
