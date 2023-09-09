<script lang="ts">
	
	import type { PageData } from './$types';
	import HolidayInfo from './HolidayInfo.svelte';
	

	export let data: PageData;
	let holidays:Holiday[] = data.dates;
	let backgroundAllerseelen = '/holiday_img/nationalfeiertag/nationalfeiertag_02.jpg';
	let backgroundNationalfeiertag = '/holiday_img/nationalfeiertag/nationalfeiertag_03.jpg';
	let activeHoliday:string;
	let isActive = true;
	

	function handleHolidayEntering(event:any){
		activeHoliday = event.detail.id;
	}
</script>

<div
	style="background-image: url('{backgroundNationalfeiertag}')"
	class="absolute w-full -z-10 h-[100vh] transition-opacity brightness-75 grayscale-[50%] duration-1000 bg-cover {activeHoliday===holidays[0].dateID
		? 'opacity-100'
		: 'opacity-0'}"
/>
<div
	style="background-image: url('{backgroundAllerseelen}')"
	class="absolute w-full -z-10 h-[100vh] transition-opacity duration-1000 bg-cover opacity-0 {activeHoliday===holidays[1].dateID
		? 'opacity-100'
		: 'opacity-0'} "
/>

<div class=" h-[100vh] overflow-y-scroll">
	{#each holidays as holiday}
	<HolidayInfo holiday={holiday} on:entered={handleHolidayEntering}>
		
	</HolidayInfo>
	{/each}

</div>
