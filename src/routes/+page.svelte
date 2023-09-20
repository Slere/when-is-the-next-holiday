<script lang="ts">
	import type { PageData } from './$types';
	import HolidayBackground from './HolidayBackground.svelte';
	import HolidayInfo from './HolidayInfo.svelte';

	export let data: PageData;
	let holidays: Holiday[] = data.dates;
	let activeHoliday: string;
	let displayScrollSymbol: boolean = true;

	function handleHolidayEntering(event: any) {
		activeHoliday = event.detail.id;
	}
	function findHolidayByID(ID: string) {
		let holiday = holidays.find((hol) => hol.dateID === ID);
		if (holiday === undefined) return '';
		return holiday.text;
	}
	function handleScroll(event: any) {
		displayScrollSymbol = false;

		document.getElementById('holidayInfo')?.removeEventListener('scroll', handleScroll);
	}
</script>

<HolidayBackground activeHolidayName={findHolidayByID(activeHoliday)} />

<div
	class="absolute left-[50%] bottom-1 translate-x-[-50%] mx-auto transition-opacity duration-1000 {!displayScrollSymbol
		? 'opacity-0'
		: 'opacity-60'}"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		class="w-7 h-7 md:h-8 md:w-8 lg:w-10 lg:h-10 animate-[bounce_1.3s_ease-in-out_infinite]"
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
