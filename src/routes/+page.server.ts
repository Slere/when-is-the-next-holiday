import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import  loader  from '$lib/server/CalendarLoader.ts'

export const load: PageServerLoad = async ({ params }) => {
    
let nextDates:Holiday[] = await loader();
   return {
    dates:nextDates,
   }
    throw error(404, 'Not found');
};