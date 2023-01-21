import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <ul>
      <li>
        <Link to="/listallbooks">VIEW ALL BOOKS</Link>
      </li>
      <li>
        <Link to="/addbook">ADD BOOK</Link>
      </li>
      <li>
        <Link to="/update">UPDATE A BOOK by ID</Link>
      </li>
      <li>
        <Link to="/delete">DELETE A BOOK by ID</Link>
      </li>
      <li>
        <Link to="/search">SEARCH A BOOK BY ID or NAME OR AUTHOR</Link>
      </li>
    </ul>
  )

}