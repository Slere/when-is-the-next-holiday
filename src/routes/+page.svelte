<script lang="ts">
	import type { PageData } from './$types';
	import HolidayInfo from './HolidayInfo.svelte';

	export let data: PageData;
	let holidays: Holiday[] = data.dates;
	let backgroundAllerheiligen = '/holiday_img/allerheiligen/bg_01.jpg';
	let backgroundNationalfeiertag = '/holiday_img/nationalfeiertag/bg_02.jpg';
	let backgroundMariäEmpfängnis = '/holiday_img/mariä_empfängnis/bg_01.jpg';
	let backgroundChristtag = '/holiday_img/christtag/bg_01.jpg';
	let backgroundStefaniTag = '/holiday_img/stefanitag/bg_01.jpg';
	let backgroundNeujahrsTag = '/holiday_img/neujahrstag/bg_01.jpg';
	let backgroundHeiligenDreiKönige = '/holiday_img/heiligen_drei_könige/bg_01.jpg';
	let backgroundOstermontag = '/holiday_img/ostermontag/bg_01.jpg';
	let backgroundStaatsfeiertag = '/holiday_img/staatsfeiertag/bg_01.jpg';
	let backgroundChristiHimmelfahrt = '/holiday_img/christi_himmelfahrt/bg_01.jpg';
	let backgroundPfingsten = '/holiday_img/pfingsten/bg_01.png';
	let backgroundFronleichnam = '/holiday_img/fronleichnam/bg_01.jpg';
	let activeHoliday: string;
	let displayScrollSymbol:boolean = true;

	function handleHolidayEntering(event: any) {
		activeHoliday = event.detail.id;
	}
	function handleScroll(event: any) {
		
		displayScrollSymbol = false;
		document.getElementById('holidayInfo')?.removeEventListener('scroll', handleScroll);
	}
</script>

<div
	style="background-image: url('{backgroundNationalfeiertag}')"
	class="bg-center absolute w-full -z-10 h-[100vh] transition-opacity brightness-75 grayscale-[50%] duration-1000 bg-cover {activeHoliday ===
	holidays[0].dateID
		? 'opacity-100'
		: 'opacity-0'}"
/>
<div
	style="background-image: url('{backgroundAllerheiligen}')"
	class="bg-center absolute w-full -z-10 h-[100vh] transition-opacity brightness-75 duration-1000 bg-cover opacity-0 {activeHoliday ===
	holidays[1].dateID
		? 'opacity-100'
		: 'opacity-0'} "
/>
<div
	style="background-image: url('{backgroundMariäEmpfängnis}')"
	class="absolute w-full -z-10 h-[100vh] transition-opacity brightness-75 duration-1000 bg-cover opacity-0 {activeHoliday ===
	holidays[2].dateID
		? 'opacity-100'
		: 'opacity-0'} "
/>
<div
	style="background-image: url('{backgroundChristtag}')"
	class="bg-center absolute w-full -z-10 h-[100vh] transition-opacity brightness-75 duration-1000 bg-cover opacity-0 {activeHoliday ===
	holidays[3].dateID
		? 'opacity-100'
		: 'opacity-0'} "
/>
<div
	style="background-image: url('{backgroundStefaniTag}')"
	class="bg-center absolute w-full -z-10 h-[100vh] transition-opacity brightness-75 duration-1000 bg-cover opacity-0 {activeHoliday ===
	holidays[4].dateID
		? 'opacity-100'
		: 'opacity-0'} "
/>
<div
	style="background-image: url('{backgroundNeujahrsTag}')"
	class="bg-center absolute w-full -z-10 h-[100vh] transition-opacity brightness-75 duration-1000 bg-cover opacity-0 {activeHoliday ===
	holidays[5].dateID
		? 'opacity-100'
		: 'opacity-0'} "
/>
<div
	style="background-image: url('{backgroundHeiligenDreiKönige}')"
	class="bg-center absolute w-full -z-10 h-[100vh] transition-opacity brightness-75 duration-1000 bg-cover opacity-0 {activeHoliday ===
	holidays[6].dateID
		? 'opacity-100'
		: 'opacity-0'} "
/>
<div
	style="background-image: url('{backgroundOstermontag}')"
	class="bg-center absolute w-full -z-10 h-[100vh] transition-opacity brightness-75 duration-1000 bg-cover opacity-0 {activeHoliday ===
	holidays[7].dateID
		? 'opacity-100'
		: 'opacity-0'} "
/>
<div
	style="background-image: url('{backgroundStaatsfeiertag}')"
	class="bg-center absolute w-full -z-10 h-[100vh] transition-opacity brightness-75 duration-1000 bg-cover opacity-0 {activeHoliday ===
	holidays[8].dateID
		? 'opacity-100'
		: 'opacity-0'} "
/>
<div
	style="background-image: url('{backgroundChristiHimmelfahrt}')"
	class="bg-top absolute w-full -z-10 h-[100vh] transition-opacity brightness-75 duration-1000 bg-cover opacity-0 {activeHoliday ===
	holidays[9].dateID
		? 'opacity-100'
		: 'opacity-0'} "
/>
<div
	style="background-image: url('{backgroundPfingsten}')"
	class="bg-center absolute w-full -z-10 h-[100vh] transition-opacity brightness-75 duration-1000 bg-cover opacity-0 {activeHoliday ===
	holidays[10].dateID
		? 'opacity-100'
		: 'opacity-0'} "
/>
<div
	style="background-image: url('{backgroundFronleichnam}')"
	class="bg-center absolute w-full -z-10 h-[100vh] transition-opacity brightness-75 duration-1000 bg-cover opacity-0 {activeHoliday ===
	holidays[11].dateID
		? 'opacity-100'
		: 'opacity-0'} "
/>
<div
	class="absolute left-[50%] bottom-1 translate-x-[-50%] mx-auto transition-opacity duration-1000  {!displayScrollSymbol
		? 'opacity-0'
		: 'opacity-60'}"
>
	<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" class="w-7 h-7 md:h-8 md:w-8 lg:w-10 lg:h-10 animate-[bounce_1.3s_ease-in-out_infinite]"
		><g transform="rotate(-90 12 12)"
			><g
				fill="none"
				stroke="white"
				stroke-dasharray="10"
				stroke-dashoffset="10"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				><path d="M2 12L9 5M2 12L9 19"
					><animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						dur="0.3s"
						values="10;0"
					/></path
				><path d="M8 12L15 5M8 12L15 19"
					><animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						begin="0.3s"
						dur="0.3s"
						values="10;0"
					/></path
				><path d="M14 12L21 5M14 12L21 19"
					><animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						begin="0.6s"
						dur="0.3s"
						values="10;0"
					/></path
				></g
			></g
		></svg
	>
</div>
<div class=" h-[100vh] overflow-y-scroll" id="holidayInfo" on:scroll={handleScroll}>
	{#each holidays as holiday}
	
		<HolidayInfo {holiday} on:entered={handleHolidayEntering} />
	{/each}
</div>
