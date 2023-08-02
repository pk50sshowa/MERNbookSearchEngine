import { gql } from '@apollo/client';

// Define the mutations used for logging in a user
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`;
// Define the mutations used for adding a user
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user{
                _id
                username
                email
                bookCount
                savedBooks {
                    authors
                    bookId
                    image
                    link
                    title
                    description
            }
        }
    }
}
`;

// Define the mutations used for saving a book
export const SAVE_BOOK = gql`
    mutation saveBook($input: BookInput!) {
        saveBook(input: $input) {
            savedBooks {
                authors
                bookId
                description
                image
                link
                title
              }
            _id
            bookCount
            username
            email
        }
    }
`;

// Define the mutations used for removing a saved book
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            _id
            username
            email
            savedBooks {
                authors
                bookId
                description
                image
                link
                title
            }
        }
    }
`;
