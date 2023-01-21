import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Searchbox from './Searchbox';
import { Link } from 'react-router-dom';

export default function Searchbook() {
    let [data, setData] = useState([]);
    let [givenValue, setgivenValue] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            let res = await Axios.get("http://127.0.0.1:3007/bookdetail");
            setData(res.data);
        }
        fetchData();
    }, [])
    let filterData = (data.filter((ele) => ele.id == givenValue || ele.author.toLowerCase() == givenValue.toLowerCase() || ele.bookname.toLowerCase() == givenValue.toLowerCase()));
    return (
        <div className='searchBook'>
            <h2>BOOK STOCK MANAGEMENT</h2>
            <p><b>ENTER ID or BOOK NAME or AUTHOR TO SEARCH:</b></p>
            <Searchbox setgivenValue={setgivenValue} />
            {filterData.length ? filterData.map((ele) => (

                <div className='displayBookDetails'>
                    <table className='bookDetails'>
                        <tr>
                            <td>Book ID</td>
                            <td><div>{ele.id}</div></td>
                        </tr>
                        <tr>
                            <td>Book Name</td>
                            <td><div><b>{ele.bookname}</b></div></td>
                        </tr>
                        <tr>
                            <td>Author Name</td>
                            <td><div>{ele.author}</div></td>
                        </tr>
                        <tr>
                            <td>Book Quantity</td>
                            <td><div>{ele.count}</div></td>
                        </tr>
                    </table>

                </div>
            ))
                :

                <div align="center"><br />
                    ENTER CORRECT DETAILS
                </div>

            };
            <div className='addBookButton'>
                <button><Link to="/home">BACK TO HOME</Link></button>
            </div>
        </div>
    );
}