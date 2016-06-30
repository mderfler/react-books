import React, {Component} from 'react';
import getBooks from '../services/index.jsx';
import Author from './author';

const Booklist = ({books})=>{
//console.log(search)
  if (books.length<1) {
    return <div>Searching...</div>;
  }
            
  const booklist = books.map((book) => {
    return (
    <div>
      <li key={book.id}>
        {book.title}
      <div key={book.id}>
        genre: {book.genre}
      </div>
      <div key={Date.now()}>
      <Author author={book.author} />
      </div>
      <div>
        year: {book.publication}
      </div>
      </li>
    </div>
    );
  });

return (
<div>
    <ul className="col-md-4 list-group">
      {booklist}
    </ul>
</div>
  );

}

export default Booklist;