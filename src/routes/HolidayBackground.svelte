<script lang="ts">
    interface HolidayData{
        name:string;
        imgSrc:string;
        customClasses:string;
    }
    const backgroundDataCollection:HolidayData[] = [
    {name:'nationalfeiertag',imgSrc:'/holiday_img/nationalfeiertag/bg_02.jpg',customClasses:'grayscale-[50%] bg-center'},
    {name:'allerheiligen',imgSrc:'/holiday_img/allerheiligen/bg_01.jpg',customClasses:'bg-center'},
    {name:'mariä empfängnis',imgSrc:'/holiday_img/mariä_empfängnis/bg_01.jpg',customClasses:''},
    {name:'christtag',imgSrc: '/holiday_img/christtag/bg_01.jpg',customClasses:'bg-center'},
    {name:'stefanitag' ,imgSrc: '/holiday_img/stefanitag/bg_01.jpg',customClasses:'bg-center'},
    {name:'neujahr' ,imgSrc: '/holiday_img/neujahrstag/bg_01.jpg',customClasses:'bg-center'},
    {name:'heilige drei könige' ,imgSrc: '/holiday_img/heiligen_drei_könige/bg_01.jpg',customClasses:'bg-center'},
    {name:'ostermontag' ,imgSrc: '/holiday_img/ostermontag/bg_01.jpg',customClasses:'bg-center'},
    {name:'staatsfeiertag' ,imgSrc: '/holiday_img/staatsfeiertag/bg_01.jpg',customClasses:'bg-center'},
    {name:'christi himmelfahrt' ,imgSrc: '/holiday_img/christi_himmelfahrt/bg_01.jpg',customClasses:'bg-top'},
    {name:'pfingstmontag' ,imgSrc: '/holiday_img/pfingsten/bg_01.png',customClasses:'bg-center'},
    {name:'fronleichnam' ,imgSrc: '/holiday_img/fronleichnam/bg_01.jpg',customClasses:'bg-center'},
    {name:'mariä himmelfahrt' ,imgSrc:'/holiday_img/mariä_himmelfahrt/bg_01.jpg',customClasses:'bg-top'},
    {name:'' ,imgSrc:'',customClasses:'bg-top bg-sky-200'}];

    export let activeHolidayName:string;

    
</script>
{#each backgroundDataCollection as backgroundData}

<div
	style="background-image: url('{backgroundData.imgSrc}')"
	class="{backgroundData.customClasses} absolute w-full -z-10 h-[100vh] transition-opacity brightness-75  duration-1000 bg-cover {activeHolidayName.toLowerCase().replaceAll('"','') ===
	backgroundData.name
		? 'opacity-100'
		: 'opacity-0'}"
/>
{/each}

