<script>
export default {
  props: ["showModal", "isOpen"],
};
</script>

<template>
  <!-- Header links -->
  <div
    :class="isOpen ? 'block' : 'hidden'"
    class="m-0 lg:flex p-5 lg:p-0 justify-center items-center shadow-b-lg lg:shadow-b-lg"
  >
    <div class="lg:block hidden">
      <ul class="">
        <li>
          <button
            class="font-general-variable text-gray-600 text-[16px]"
            type="button"
            aria-haspopup="true"
            aria-expanded="true"
            aria-controls="dropdown1"
          >
            Job Seekers<span class="mx-2 arrow"></span>
          </button>
          <ul class="dropdown" id="dropdown1">
            <li>
              <router-link
                to="/jobs"
                class="block px-4 py-2 mt-2 text-sm text-gray-500 rounded-t-md rounded-b-md lg:mt-0 hover:text-primary hover:bg-tri-hover focus:text-primary first:rounded-b-none last:rounded-md"
              >
                Job Vacancies
              </router-link>
            </li>
            <li>
              <router-link
                to="/job-search-advice"
                class="block px-4 py-2 mt-2 text-sm text-gray-500 border-t border-gray-300 border-1 lg:mt-0 hover:text-primary hover:bg-tri-hover focus:text-primary last:rounded-t-none last:rounded-md"
              >
                Job Search Advice
              </router-link>
            </li>
            <li>
              <router-link
                to="/cv-services"
                class="block px-4 py-2 mt-2 text-sm text-gray-500 border-t border-gray-300 border-1 lg:mt-0 hover:text-primary hover:bg-tri-hover focus:text-primary last:rounded-t-none last:rounded-md"
              >
                CV Review Services
              </router-link>
            </li>
            <li>
              <router-link
                to="/softskills"
                class="block px-4 py-2 mt-2 text-sm text-gray-500 border-t border-gray-300 border-1 lg:mt-0 hover:text-primary hover:bg-tri-hover focus:text-primary last:rounded-t-none last:rounded-md"
              >
                Soft Skills Training
              </router-link>
            </li>
            <li></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="lg:block hidden">
      <ul class="">
        <li>
          <button
            class="font-general-variable text-gray-600 text-[16px]"
            type="button"
            aria-haspopup="true"
            aria-expanded="true"
            aria-controls="dropdown1"
          >
            Career<span class="arrow"></span>
          </button>
          <ul class="dropdown" id="dropdown1">
            <li>
              <router-link
                to="/career-development"
                class="block px-4 py-2 mt-2 text-sm text-gray-500 rounded-t-md rounded-b-md lg:mt-0 hover:text-primary hover:bg-tri-hover focus:text-primary first:rounded-b-none last:rounded-md"
              >
                Career Development
              </router-link>
            </li>
            <li>
              <router-link
                to="/life-at-work"
                class="block px-4 py-2 mt-2 text-sm text-gray-500 border-t border-gray-300 border-1 lg:mt-0 hover:text-primary hover:bg-tri-hover focus:text-primary last:rounded-t-none last:rounded-md"
              >
                Life at Work
              </router-link>
            </li>
            <li>
              <router-link
                to="/job-market-news"
                class="block px-4 py-2 mt-2 text-sm text-gray-500 border-t border-gray-300 border-1 lg:mt-0 hover:text-primary hover:bg-tri-hover focus:text-primary last:rounded-t-none last:rounded-md"
              >
                Job Market News
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="lg:block hidden">
      <ul class="">
        <li>
          <button
            class="font-general-variable text-gray-600 text-[16px]"
            type="button"
            aria-haspopup="true"
            aria-expanded="true"
            aria-controls="dropdown1"
          >
            Employers<span class="arrow"></span>
          </button>
          <ul class="dropdown" id="dropdown1">
            <li>
              <router-link
                to="/best-match"
                class="block px-4 py-2 mt-2 text-sm text-gray-500 rounded-t-md rounded-b-md lg:mt-0 hover:text-primary hover:bg-tri-hover focus:text-primary first:rounded-b-none last:rounded-md"
              >
                Best Match
              </router-link>
            </li>
            <li>
              <router-link
                to="/job-search-advice"
                class="block px-4 py-2 mt-2 text-sm text-gray-500 border-t border-gray-300 border-1 lg:mt-0 hover:text-primary hover:bg-tri-hover focus:text-primary last:rounded-t-none last:rounded-md"
              >
                Job Search Advice
              </router-link>
            </li>
            <li>
              <router-link
                to="/skills-assessments"
                class="block px-4 py-2 mt-2 text-sm text-gray-500 border-t border-gray-300 border-1 lg:mt-0 hover:text-primary hover:bg-tri-hover focus:text-primary last:rounded-t-none last:rounded-md"
              >
                Skills Assessments
              </router-link>
            </li>
            <li>
              <router-link
                to="/employers-coner"
                class="block px-4 py-2 mt-2 text-sm text-gray-500 border-t border-gray-300 border-1 lg:mt-0 hover:text-primary hover:bg-tri-hover focus:text-primary last:rounded-t-none last:rounded-md"
              >
                Employers Corner
              </router-link>
            </li>
            <li></li>
          </ul>
        </li>
      </ul>
    </div>
    <!--  nav item for small screen device-->
    <div class="lg:hidden block text-left mt-2">
      <label for="">Job Seekers</label>
      <ul>
        <li>
          <router-link
            to="/jobs"
            class="block pl-0 ml-4 py-2 text-sm text-gray-500 border-l-2 lg:mt-0 hover:text-primary hover:bg-tri-hover focus:text-primary"
          >
            Job Vacancies
          </router-link>
        </li>
        <li>
          <router-link
            to="/job-search-advice"
            class="block pl-0 ml-4 py-2 text-sm text-gray-500 border-l-2 lg:mt-0 hover:text-primary hover:bg-tri-hover focus:text-primary"
          >
            Job Search Advice
          </router-link>
        </li>
        <li>
          <router-link
            to="/cv-services"
            class="block pl-0 ml-4 py-2 text-sm text-gray-500 border-l-2 lg:mt-0 hover:text-primary hover:bg-tri-hover focus:text-primary"
          >
            CV Review Services
          </router-link>
        </li>
        <li>
          <router-link
            to="/softskills"
            class="block pl-0 ml-4 py-2 text-sm text-gray-500 border-l-2 lg:mt-0 hover:text-primary hover:bg-tri-hover focus:text-primary"
          >
            Soft Skills Training
          </router-link>
        </li>
        <li></li>
      </ul>
    </div>
    <div class="lg:hidden block text-left mt-2">
      <label for="">Career</label>
      <ul>
        <li>
          <router-link
            to="/career-development"
            class="block pl-0 ml-4 py-2 text-sm text-gray-500 border-l-2 lg:mt-0 hover:text-primary hover:bg-tri-hover focus:text-primary"
          >
            Career Development
          </router-link>
        </li>
        <li>
          <router-link
            to="/life-at-work"
            class="block pl-0 ml-4 py-2 text-sm text-gray-500 border-l-2 lg:mt-0 hover:text-primary hover:bg-tri-hover focus:text-primary"
          >
            Life at Work
          </router-link>
        </li>
        <li>
          <router-link
            to="/job-market-news"
            class="block pl-0 ml-4 py-2 text-sm text-gray-500 border-l-2 lg:mt-0 hover:text-primary hover:bg-tri-hover focus:text-primary"
          >
            Job Market News
          </router-link>
        </li>
      </ul>
    </div>
    <div class="lg:hidden block text-left mt-2">
      <label for="">Employers</label>
      <ul>
        <li>
          <router-link
            to="/best-match"
            class="block pl-0 ml-4 py-2 text-sm text-gray-500 border-l-2 lg:mt-0 hover:text-primary hover:bg-tri-hover focus:text-primary"
          >
            Best Match
          </router-link>
        </li>
        <li>
          <router-link
            to="/job-search-advice"
            class="block pl-0 ml-4 py-2 text-sm text-gray-500 border-l-2 lg:mt-0 hover:text-primary hover:bg-tri-hover focus:text-primary"
          >
            Job Search Advice
          </router-link>
        </li>
        <li>
          <router-link
            to="/skills-assessments"
            class="block pl-0 ml-4 py-2 text-sm text-gray-500 border-l-2 lg:mt-0 hover:text-primary hover:bg-tri-hover focus:text-primary"
          >
            Skills Assessments
          </router-link>
        </li>
        <li>
          <router-link
            to="/employers-coner"
            class="block pl-0 ml-4 py-2 text-sm text-gray-500 border-l-2 lg:mt-0 hover:text-primary hover:bg-tri-hover focus:text-primary"
          >
            Employers Corner
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul li {
  list-style: none;
  font-size: 18px;
}

ul li button {
  font-size: inherit;
  cursor: pointer;
  width: 100%;
}

ul li a {
  display: block;
  color: inherit;
  text-decoration: none;
}

ul li a,
ul li button {
  padding: 0.7rem 1rem;
  text-align: left;
}

.dropdown {
  padding: 2px 1.5rem;
  height: 0;
  overflow: hidden;
  transition: height ease 0.2s;
}

li:focus-within .dropdown {
  height: 135px;
}

.arrow {
  width: 0.5em;
  height: 0.5em;
  display: inline-block;
  vertical-align: middle;
  border-left: 0.15em solid currentColor;
  border-bottom: 0.15em solid currentColor;
  transform: rotate(-45deg);
  margin-left: 0.38em;
  margin-top: -0.25em;
  transition: transform 100ms ease-in-out;
}

li:focus-within > button > .arrow {
  transform: rotate(-225deg);
  margin-top: 4px;
}
/* MEDIA QUERIES  */
@media (min-width: 640px) {
  ul li {
    position: relative;
    font-size: 14px;
  }

  .dropdown {
    position: absolute;
    right: 0;
    left: auto;
    box-shadow: 0 10px 15px -3px rgba(46, 41, 51, 0.08),
      0 4px 6px -2px rgba(71, 63, 79, 0.16);
    z-index: 99;
    min-width: 10rem;
    padding: 0;
    background-color: #fff;
    border-radius: 0 0 0.5rem 0.5rem;
  }

  ul li:hover .dropdown {
    height: 135px;
  }

  ul li:hover > button > .arrow {
    transform: rotate(-225deg);
    margin-top: 4px;
  }
}
/* MEDIA QUERIES  STOPS HERE */

.user-id {
  position: relative;
  cursor: pointer;
}

.dropdown-arrow {
  height: 0;
  width: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #333;
}

.user-id:hover .dropdown-arrow {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #333;
  border-top: 6px solid transparent;
}

.dropdown-menu {
  list-style-type: none;
  display: none;
  width: 200px;
}

.user-id:hover .dropdown-menu {
  display: block;
  position: absolute;
  top: 40px;
  left: 25px;
}

.dropdown-menu ul li {
  list-style-type: none;
  display: block;
  font-size: 12px;
}

.dropdown-menu ul li:last-child {
  border-bottom: none;
}

.dropdown-menu ul li:hover {
  background: #c2c0c0;
  color: #fff;
}
</style>
