import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import  loader  from '$lib/server/CalendarLoader.ts'

export const load: PageServerLoad = async ({ params }) => {
    
let holidayArray:Holiday[]|undefined = await loader();
if(holidayArray===undefined){
    throw error(502,'calendar data currently unavailable');
}
const holidayArrayFiltered = holidayArray.filter((holiday:Holiday) =>{return holiday.type==='\"HF\"'});

holidayArrayFiltered.sort((a:Holiday,b:Holiday)=>{return a.date.getTime()-b.date.getTime()})

let nextHolidayIndex = holidayArrayFiltered.findIndex((holiday:Holiday)=>holiday.date.getTime()>Date.now());
// const nextDates:Holiday[] = [holidayArrayFiltered[nextHolidayIndex],holidayArrayFiltered[nextHolidayIndex+1],holidayArrayFiltered[nextHolidayIndex+2],holidayArrayFiltered[nextHolidayIndex+3]];
const nextDates:Holiday[] = [];
for( let i=nextHolidayIndex;i<nextHolidayIndex+12;i++){
    nextDates.push(holidayArrayFiltered[i]);
}
   return {
    dates:nextDates,
   }
    throw error(404, 'Not found');
};