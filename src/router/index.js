import { createRouter, createWebHistory } from 'vue-router';
import Defult from '../views/Defult.vue';
import Jobs from '../views/Jobs.vue';
import CvServices from '../views/CvServices.vue';
import softskills from '../views/SoftSkills.vue';
import LifeAtWork from '../views/LifeAtWork.vue';
import JobSearchAdvice from '../views/JobSearchAdvice.vue';
import JobMarketNews from '../views/JobMarketNews.vue';
import CareerDevelopment from '../views/CareerDevelopment.vue';
import Signup from '../views/Authpages/Signup.vue';
import Login from '../views/Authpages/Login.vue';
import BestMatch from '../views/BestMatch.vue';
import SkillsAssessments from '../views/SkillsAssessments.vue';
import EmployersConer from '../views/EmployersConer.vue';
import About from '../views/About.vue';
import CompaniesHiring from '../views/CompaniesHiring.vue';
import PrivacyPolicy from '../views/PrivacyPolicy.vue';
import TermsConditions from '../views/TermsConditions.vue';



const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	{
		path: '/',
		name: 'Defult',
		component: Defult,
		meta: {
			title: 'Jobberman_clone',
		},
	},
	{
		path: '/terms-and-conditions',
		name: 'Terms ',
		component: TermsConditions,
		meta: {
			title: 'Jobberman_clone - Terms & Conditions',
		},
	},
	{
		path: '/privacy-policy',
		name: 'Privacy',
		component: PrivacyPolicy,
		meta: {
			title: 'Jobberman_clone - Privacy Policy',
		},
	},
	{
		path: '/companies',
		name: 'Companies',
		component: CompaniesHiring,
		meta: {
			title: 'Jobberman_clone - Companies Hiring',
		},
	},
	{
		path: '/about',
		name: 'About',
		component: About,
		meta: {
			title: 'Jobberman_clone - About',
		},
	},
	{
		path: '/employers-coner',
		name: 'Employers-coner',
		component: EmployersConer,
		meta: {
			title: 'Jobberman_clone - Employee Coner',
		},
	},
	{
		path: '/skills-assessments',
		name: 'Skills-assessments',
		component: SkillsAssessments,
		meta: {
			title: 'Jobberman_clone - Skills Assessments',
		},
	},
	{
		path: '/best-match',
		name: 'Best-match',
		component: BestMatch,
		meta: {
			title: 'Jobberman_clone - Best Match',
		},
	},
	{
		path: '/jobs',
		name: 'Jobs',
		component: Jobs,
		meta: {
			title: 'Jobberman_clone - Jobs',
		},
	},
	{
		path: '/cv-services',
		name: 'Cv-services',
		component: CvServices,
		meta: {
			title: 'Jobberman_clone - Cv Services',
		},
	},
	{
		path: '/job-search-advice',
		name: 'job-search-advice',
		component: JobSearchAdvice,
		meta: {
			title: 'Jobberman_clone - Job Search Advice',
		},
	},
	{
		path: '/softskills',
		name: 'softskills',
		component: softskills,
		meta: {
			title: 'Jobberman_clone - soft Skills',
		},
	},
	{
		path: '/life-at-work',
		name: 'life-at-work',
		component: LifeAtWork,
		meta: {
			title: 'Jobberman_clone - Life At Work',
		},
	},
	{
		path: '/job-market-news',
		name: 'job-market-news',
		component: JobMarketNews,
		meta: {
			title: 'Jobberman_clone - Job MarketNews',
		},
	},
	{
		path: '/career-development',
		name: 'career-development',
		component: CareerDevelopment,
		meta: {
			title: 'Jobberman_clone - Career Development',
		},
	},
	{
		path: '/auth/login',
		name: 'login',
		component: Login,
		meta: {
			title: 'Jobberman_clone - Login',
		},
	},
	{
		path: '/auth/register',
		name: 'signup',
		component: Signup,
		meta: {
			title: 'Jobberman_clone - Signup',
		},
	},
	,
],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;