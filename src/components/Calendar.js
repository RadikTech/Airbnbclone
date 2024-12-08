import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CalendarFunc = (props) => {

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

    const storeId = props.placesId;

    var daysCheck = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

    return (<div className='calendarHolder calendarHolder2'>

        {/* {props.buttonopenState && <DateRangePicker ranges={[selectionRange]} minDate={new Date()} rangeColors={["#FD5B61"]} onChange={handleSelect} />} */}

        {props.buttonopenState && <button className='close-cal rounded-xl' onClick={props.closeFunc}>Close calendar</button>}

        {daysCheck == 0 ? <p className={daysCheck == 0 ? "days-0" : "days-updated"}>days selected = 0</p> : <p className='days-updated'>{daysCheck} days selected</p>}

        {daysCheck == 0 ? "" : <Link to={`/checkout/${props.placesId}/${daysCheck}`} state={{ data: data }}  > <button className={props.buttonCloseState === false ? "checkout-btn-after" : "checkout-btn"}>Proceed To checkout</button>  </Link>}


    </div>)
}

export default CalendarFunc

