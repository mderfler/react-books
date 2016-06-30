import React, {Component} from 'react';

import Booklist from './booklist';
import SearchBar from './searchbar';
import getBooks from '../services/index.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { books: [] };
    }

    componentDidMount() {
        this.fetchBooks();
    }

    fetchBooks() {
        var array = [];
        getBooks.getBooks().then(function(data){

            for (var i = data.length - 1; i >= 0; i--) {
                array.push(data[i])
            }

        }).then(function(data) {
            this.setState({books: array});
        }.bind(this))
     }

    bookSearch (term){
        console.log(term)
    }

    render() {
        return (
            <div>
             <SearchBar onSearchTermChange={this.bookSearch}/>
            <Booklist books={this.state.books} />
            </div>
        );
    }
}

export default App;