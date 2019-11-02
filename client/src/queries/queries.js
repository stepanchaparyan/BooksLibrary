import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

const addBookMutation = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`;

const addAuthorMutation = gql`
    mutation AddAuthor($name: String!, $age: Int!){
        addAuthor(name: $name, age: $age){
            name
            id
        }
    }
`;

const updateBookMutation = gql`
    mutation UpdateBook($id: ID!, $name: String!, $genre: String!, $authorId: ID!){
        updateBook(id: $id, name: $name, genre: $genre, authorId: $authorId){
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
            author {
                id
                name
                age
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
            books {
                id
                name
                genre
            }
        }
    }
`;

export { getAuthorsQuery, getBooksQuery, getBookQuery, getAuthorQuery, addBookMutation, addAuthorMutation, updateBookMutation, deleteBookMutation };
