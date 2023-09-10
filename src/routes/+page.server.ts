import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import  loader  from '$lib/server/CalendarLoader.ts'

export const load: PageServerLoad = async ({ params }) => {
    
let holidayArray:Holiday[] = await loader();
const holidayArrayFiltered = holidayArray.filter((holiday:Holiday) =>{return holiday.type==='\"HF\"'});

holidayArrayFiltered.sort((a:Holiday,b:Holiday)=>{return a.date.getTime()-b.date.getTime()})

let nextHolidayIndex = holidayArrayFiltered.findIndex((holiday:Holiday)=>holiday.date.getTime()>Date.now());
const nextDates:Holiday[] = [holidayArrayFiltered[nextHolidayIndex],holidayArrayFiltered[nextHolidayIndex+1],holidayArrayFiltered[nextHolidayIndex+2],holidayArrayFiltered[nextHolidayIndex+3]];
   return {
    dates:nextDates,
   }
    throw error(404, 'Not found');
};