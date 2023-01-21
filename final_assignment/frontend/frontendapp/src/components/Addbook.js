import React, { useState } from 'react';
import Axios from 'axios';
import {Link} from'react-router-dom';

export default function Addbook() {
    let [data, setData] = useState({});
    const handleChange = (e) => {
        setData({
            ...data,

            [e.target.name]: e.target.value

        })
    }
    console.log(data);

    async function sendData() {
        let res = await Axios.post("http://127.0.0.1:3007/bookdetail", data)

    }
    return (
        <div className='addBookPage'>
            <h2>BOOK STOCK MANAGEMENT</h2>
            <h3>Add the Book Details here </h3>
            <div className='addBookDetails'> 
            <div className='addBook'>
                
                Book Name: <input type='text' name='bookname' onChange={handleChange} /><br /> <br />

                Book Author: <input type='text' name='author' onChange={handleChange} /><br /> <br />

                Quantity: <input type='text' name='count' onChange={handleChange} /><br /><br />

            </div>
            <div className='addBookButton'>
            <button onClick={sendData}> CLICK TO ADD BOOK DETAILS</button>
            </div>
            <div className='addBookButton'>
            <button><Link to="/home">BACK TO HOME</Link></button>
            </div>
            </div>
        </div>
    )
}

