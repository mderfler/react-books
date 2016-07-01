import React, {Component} from 'react';
import SearchBar from './searchbar';
import Booklist from './booklist';
import getBooks from '../services/index.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { books: [],
                        searchBooks: [] };
    }

    componentWillMount() {
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
            this.setState({searchBooks: array});
        }.bind(this))
     }

    foundBooks(term){
        term = term.toString().toLowerCase().trim();

        var result = [];
            for (var i = this.state.books.length - 1; i >= 0; i--) {
               if (this.state.books[i].title.toLowerCase().indexOf(term)>-1){
                result.push(this.state.books[i])
               }
               else if (this.state.books[i].publication.toString().indexOf(term)>-1){
                result.push(this.state.books[i])
               }
               else if (this.state.books[i].genre.toLowerCase().indexOf(term)>-1){
                result.push(this.state.books[i])
               }
               else if (typeof this.state.books[i].author === "string" && this.state.books[i].author.toLowerCase().indexOf(term)>-1){
                result.push(this.state.books[i])
               }
               else if (typeof this.state.books[i].author === "object" && this.state.books[i].author.join("").toLowerCase().indexOf(term)>-1){
                result.push(this.state.books[i])
               }
            }
            this.setState({searchBooks: result})           
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={this.foundBooks.bind(this)}/>
                <Booklist books={this.state.searchBooks} />
            </div>
        );
    }
}

export default App;