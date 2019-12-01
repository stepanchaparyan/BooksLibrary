import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors {
            name
            age
            photo
            id
        }
    }
`;

const getBooksQuery = gql`
    {
        books {
            name
            genre 
            photo           
            id
        }
    }
`;

const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $photo: String, $authorId: ID!){
        addBook(name: $name, genre: $genre, photo: $photo, authorId: $authorId){
            name
            id
        }
    }
`;

const addAuthorMutation = gql`
    mutation AddAuthor($name: String!, $age: Int!, $photo: String){
        addAuthor(name: $name, age: $age, photo: $photo){
            name
            id
        }
    }
`;

const updateBookMutation = gql`
    mutation UpdateBook($id: ID!, $name: String!, $genre: String!, $photo: String, $authorId: ID!){
        updateBook(id: $id, name: $name, genre: $genre, photo: $photo, authorId: $authorId){
            name
            id
        }
    }
`;

const updateAuthorMutation = gql`
    mutation UpdateAuthor($id: ID!, $name: String!, $age: Int!, $photo: String,){
        updateAuthor(id: $id, name: $name, age: $age, photo: $photo){
            name
            id
        }
    }
`;

const deleteBookMutation = gql`
    mutation DeleteBook($id: ID){
        deleteBook(id: $id) {
            id            
        }
    }
`;

const getBookQuery = gql`
    query GetBook($id: ID){
        book(id: $id) {
            id
            name
            genre
            photo
            author {
                id
                name
                age
                photo
                books {
                    name
                    id
                }
            }
        }
    }
`;

const getAuthorQuery = gql`
    query GetAuthor($id: ID){
        author(id: $id) {
            id
            name
            age
            photo
            books {
                id
                name
                genre
                photo
            }
        }
    }
`;

export { getAuthorsQuery, getBooksQuery, getBookQuery, getAuthorQuery, addBookMutation, addAuthorMutation, updateBookMutation, updateAuthorMutation, deleteBookMutation };
