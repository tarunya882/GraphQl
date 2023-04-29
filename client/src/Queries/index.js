
import { gql } from 'apollo-boost';
import { Query } from "react-apollo";
import { Mutation } from "react-apollo";

const addBookMutation = gql`
  mutation($id:Int!,$title: String!, $genre: String!, $author: String!,$img:String!){
    addBook(id:$id,title: $title, genre: $genre, author: $author,img:$img) {
      id,
      title,
      genre,
      author,
      img
    }
  }
`;

const deleteBookMutation = gql`
  mutation($id:Int!){
    deleteBook(id:$id) {
      id,
      title,
      genre,
      author
    }
  }
`;
const getAllBooks = gql`
  query {
    getAllBooks {
      id,
      title,
      genre,
      author,
      img
    }
  }
`;

const getBookById = gql`
    query($id: ID){
        book(id: $id){
            id
            name
            genre
            author
        }
    }
`;

const deleteBook = gql`
    query($id: ID){
        deleteBook(id: $id){
            id,
            name,
            genre,
            author
        }
    }
`;


const getBooksByCategory = gql`
  query($genre:String!) {
    getBooksByCategory(genre:$genre){
      id,
      title,
      genre,
      author
    }
  }
`;


export {
  addBookMutation,
  deleteBookMutation,
  getAllBooks,
  getBooksByCategory,
  getBookById,
  deleteBook
}