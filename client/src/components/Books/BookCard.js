import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookCard extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         selected: null
    //     }
    // }

    // deleteBook = (bookId) => {
    //     this.props.deleteBookMutation({
    //         variables: {
    //             id: bookId
    //         },
    //         refetchQueries: [{ query: getBooksQuery }]
    //     });
    // }

    //   displayBooks(){
    //     var data = this.props.data;
    //     // console.log('Booklist ', this.props);
    //     if(data.loading){
    //         return( <div>Loading books...</div> );
    //     } else {
    //         return data.books.map(book => {
    //             return(
    //                 <div>
    //                     <BookCard books={data} />
    //                 </div>
    //                 <li key={ book.id } onClick={ () => this.deleteBook(book.id) }>{ book.name }</li>
    //             );
    //         })
    //     }
    // }
        displayBooks(){
            const data = this.props;
            console.log('Booklist ', this.props);
            // if(data.loading){
            //     return( <div>Loading books...</div> );
            // } else {
                return data.books.map((book, index) => {
                    return <BookCard books={book} deleteBook={this.deleteBook} key={index}/>;
                })
            // }
        }

    render(){
        // console.log("card ", this.props.book.name)
        return(
            <div className="book-list-container">
                {/* <ul className="book-list">
                    { this.displayBooks() }
                </ul> */}
                {/* <BookDetails bookId={ this.state.selected } /> */}
                {/* {this.props.books.map((book, i) => { */}
                {/* return( <div key={i}> */}
                         {/* {this.props.books} */}
                         { this.displayBooks() }
                         {/* {this.props.book.id} */}
                        {/* </div> */}
                {/* // )} */}
                {/* // ) */}
                {/* // } */}
            </div>
        );
    }
}

BookCard.propTypes = {
    books: PropTypes.any,
    // deleteBookMutation: PropTypes.any
}

export { BookCard };