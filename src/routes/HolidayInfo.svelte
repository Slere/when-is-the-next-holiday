<script lang="ts">
	import { inview, type Options } from 'svelte-inview';
	import { createEventDispatcher, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();
	const options: Options = { rootMargin: '-10px', threshold: 1 };
	let isInView: boolean;
	export let holiday:Holiday;
    
    let date = holiday.date;
	let now = Date.now();
	let end = date.getTime();
	let days: number;
	let hours: number;
	let minutes: number;
	let seconds: number;
	$: count = Math.round((end - now) / 1000);

	$: {
		let delta = Math.round((end - now) / 1000);
		days = Math.floor(delta / 86400);
		delta -= days * 86400;
		hours = Math.floor(delta / 3600) % 24;
		delta -= hours * 3600;
		minutes = Math.floor(delta / 60) % 60;
		delta -= minutes * 60;
		seconds = delta % 60;
	}
	function updateTimer() {
		now = Date.now();
		
	}

	let interval = setInterval(updateTimer, 1000);
	$: if (count === 0) clearInterval(interval);
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="h-[88vh] w-fit">
	<div
		class="h-[80vh] min-h-fit w-fit flex items-end px-3 md:px-8 transition-opacity duration-1000 {isInView
			? 'opacity-100'
			: 'opacity-0'}"
	>
		<div
			class="text-[#ffffff]"
			use:inview={options}
			on:inview_change={(event) => {
				const { inView, entry, scrollDirection, observer, node } = event.detail;
				isInView = inView;
			}}
			on:inview_enter={(event) => {
				const { inView, entry, scrollDirection, observer, node } = event.detail;
				dispatch('entered', { id:holiday.dateID });
			}}
			on:inview_leave={(event) => {
				const { inView, entry, scrollDirection, observer, node } = event.detail;
				isInView = inView;
			}}
			on:inview_init={(event) => {
				const { observer, node } = event.detail;
			}}
		>
			<h1 class="text-3xl  sm:text-4xl leading-6 md:text-5xl  lg:text-7xl font-extrabold uppercase break-all">
				{holiday.text.replaceAll('"', '')}
			</h1>
			<h2 class="text-2xl md:text-3xl lg:text-5xl font-light uppercase">
				{date.toLocaleString('de-AT', {
					timeZone: 'Europe/Vienna',
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                })}
			</h2>

			<h2 class="pt-4 text-md md:text-lg lg:text-2xl font-medium">
				Das ist in {days} Tagen, {hours} Stunden, {minutes} Minuten und {seconds} Sekunden
			</h2>
		</div>
	</div>
</div>
<!-- <div class="text-white">{isInView ? 'Hey I am in the viewport' : 'Bye, Bye'}</div> -->
