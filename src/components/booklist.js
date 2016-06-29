import React, {Component} from 'react';
import getBooks from '../services/index.jsx';

const Booklist = ({books})=>{

  if (books.length<1) {
    return <div>Loading...</div>;
  }
 
  const booklist = books.map((book) => {
    return (
      <div key={book.id}>{book.title}</div>
    );
  });


return (
    <ul className="col-md-4 list-group">
      {booklist}
    </ul>
  );

}

export default Booklist;