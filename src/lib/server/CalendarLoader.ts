
export default async function loader(): Promise<Holiday[] | undefined> {

    const holidayArray: Holiday[] = [];
    const metaDataRes = await fetch(`https://www.data.gv.at/katalog/api/3/action/package_show?id=3deb9da7-8394-4797-9f32-5ca95281ba5b`);
    if(metaDataRes.status!==200)
        return undefined
    const metaData = await metaDataRes.json();
    const calendarURL = metaData.result.resources[0].url;
    if(calendarURL===undefined)
        return undefined;
    const res = await fetch(calendarURL);
    if(res.status!==200)
        return undefined
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
    return holidayArray;
   


    
    
}