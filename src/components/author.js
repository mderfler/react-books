import React, {Component} from 'react';
//import Booklist from './booklist';

const Author = (props)=>{

var author = props.author;
var date = Date.now();
date = date.toString();
if (typeof author === "object"){
  author=author.join(", ");
}

return (
 
    <div key = {date}>
    author(s): {author}
    </div>
  );

}

export default Author;