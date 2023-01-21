import React, { useState, useEffect } from 'react';
export default function Searchbox({ setgivenValue }) {


    function handleChange(e) {
        setgivenValue(e.target.value)
    }
    return (
        <div className='searchHere'>
            <input placeholder='Search here...' onChange={handleChange} />
        </div>
        
    )
}