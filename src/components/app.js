import React, {Component} from 'react';
import SearchBar from './searchbar';
import Booklist from './booklist';
import getBooks from '../services/index.jsx';
import _ from 'lodash';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { books: [],
                        searchBooks: [] };
        this.foundBooks = this.foundBooks.bind(this);
        this.fetchBooks = this.fetchBooks.bind(this);
    }

    componentWillMount() {  
        this.fetchBooks();
    }

    fetchBooks() {
        var array = [];
        getBooks.getBooks().then(
            function(data) {
                this.setState({books: data, searchBooks: data});
                }.bind(this)
        );
     }

    foundBooks(term){
        term = term.toString().toLowerCase().trim();
        var results = [];
        for (var obj in this.state.books) {
            var bookObj = this.state.books[obj]; //this is a book object
         
            for (var prop in bookObj) {
                var property = bookObj[prop];

                if (typeof property === 'object') {
                    for (var author in property) { 
                      if(property[author].toLowerCase().indexOf(term)>-1){
                        results.push(bookObj);
                      }     
                    }
                }

                if (property.toString().toLowerCase().indexOf(term)>-1) {
                   results.push(bookObj);
                }
            }
        }

        var bookArray = _.uniqBy(results,'id');

        this.setState({searchBooks: bookArray})           
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={this.foundBooks}/>
                <Booklist books={this.state.searchBooks} />
            </div>
        );
    }
}

export default App;