import React, {Component} from 'react';

import Booklist from './booklist';
import getBooks from '../services/index.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
        this.findBooks();
}

 findBooks() {
    var array = [];
    getBooks.getBooks().then(function(data){
                
                    for (var i = data.length - 1; i >= 0; i--) {
                        array.push(data[i])
                    }
                })
    this.state.books.push(array);
}

    render() {
        return (
            <div>
             Hello from App in component folder
            <Booklist books={this.state.books[0]} />
            </div>
        );
    }
}

export default App;