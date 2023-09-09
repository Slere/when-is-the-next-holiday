import fs from 'fs';
import { base } from '$app/paths'

export default async function loader(): Promise<Holiday[] | undefined> {

    const holidayArray: Holiday[] = [];
    const res = await fetch(`https://www.wien.gv.at/gogv/l9ogdfeiertagskalender`);
    //  const holidaysString = fs.readFileSync('./calendar/feiertagskalender.csv', { encoding: 'utf-8' });
    const holidaysString= await res.text();
    const holidaysStringTrimmed = holidaysString.trim();
    const holidaysStringRows = holidaysStringTrimmed.split('\n');
    holidaysStringRows.forEach((holidayString) => {

        let holidayStringArray = holidayString.split(',');

        let holiday: Holiday = {
            dateID: holidayStringArray[0],
            calendarID: holidayStringArray[1],
            date: new Date(holidayStringArray[2]),
            weekday: holidayStringArray[3],
            type: holidayStringArray[4],
            text: holidayStringArray[5],
            dateCreated: new Date(holidayStringArray[6]),
            dateChanged: new Date(holidayStringArray[7])
        }
        holidayArray.push(holiday);

    });
    
    const holidayArrayFiltered = holidayArray.filter((holiday:Holiday) =>{return holiday.type==='\"HF\"'});
    
    holidayArrayFiltered.sort((a:Holiday,b:Holiday)=>{return a.date.getTime()-b.date.getTime()})

    let nextHolidayIndex = holidayArray.findIndex((holiday:Holiday)=>holiday.date.getTime()>Date.now());


    
    return [holidayArray[nextHolidayIndex],holidayArray[nextHolidayIndex+1]];
}