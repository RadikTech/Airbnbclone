import React from 'react'
import { useState } from 'react';

const CalendarNavBar = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const data = daysCheck;

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate)
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }
    var daysCheck = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
    //  differenceInDays(endDate, startDate);


    return (
        <div className='calendNavBarHodl mx-auto'>

            <div className='NavBarCalendar'>
                {/* <DateRangePicker color='black' ranges={[selectionRange]} minDate={new Date()} rangeColors={["#black"]} onChange={handleSelect} /> */}
            </div>
        </div>

    )
}

export default CalendarNavBar