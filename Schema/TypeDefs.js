const {gql} =require("apollo-server-express");
const typeDefs=gql`
  type Book{
      id: Int!
      title: String!
      genre: String!
      author: String!
      img: String!
  }


  type Query{
      getAllBooks: [Book!]!
      getBookById(id:Int!):Book!
      getBooksByCategory(genre:String!):[Book!]!
  }

  type Mutation{
      addBook(id:Int!,title: String!,genre: String!,author: String!,img:String!):Book!
      updateBook(id:Int!,title: String!,genre: String!,author: String!,img:String!):Book!
      deleteBook(id:Int!):Book!
  }

`;

module.exports={typeDefs};