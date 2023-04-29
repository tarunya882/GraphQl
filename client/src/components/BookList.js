import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import React, { useEffect, useState } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Mutation } from "react-apollo";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Box } from "@material-ui/core";
import BookDetails from "./BookDetails";

const useStyle = makeStyles((theme) => ({
  // body: {},
  // card: {
  //   margin: "10px",
  // },
  // icon: { minHeight: "100%" },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "indianred",
    width: "230px",
    //borderRadius:"20px",
    // height: "calc(19vw)",
    height: "270px",
    marginLeft: "2vw",
    marginRight: "2vw",
    marginTop: "3vw",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "30vw",
      height: "40vw",
      margin: "10px",
    },
  },
  iconContainer: {
    width: "100%",
    height: "15vw",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "28vw",
    },
  },
  icon: {
    fontSize: "xxx-large",
    color: "cornsilk",
    // backgroundColor: "indianred"
  },
  container: {
    width: "100%",
    height: "5vw",
    [theme.breakpoints.down("sm")]: {
      height: "12vw",
    },
  },
}));

const GET_BOOKS = gql`
  query {
    getAllBooks {
      id
      title
      genre
      author
      img
    }
  }
`;

const ADD_BOOK = gql`
  mutation addBook(
    $id: Int!
    $title: String!
    $genre: String!
    $author: String!
  ) {
    addBook(id: $id, title: $title, genre: $genre, author: $author) {
      id
      title
      genre
      author
    }
  }
`;

function BookList() {
  const styles = useStyle();
  const [selected, setSelected] = useState(0);
  //const [searchTerm, setSearchTerm] = useState("");
 // const [booksdata,setData]=useState([]);
  return (
    <Query query={GET_BOOKS}>
      {
      ({ loading, error, data }) => {
        if (loading) {
          return <div>Loading8</div>;
        }
        if (error) {
          return <div>Error: {error.toString()}</div>;
        }
       // setData(data.getAllBooks);
        console.log(data);
        // setData(data.data);
    
        const booksdata=data.getAllBooks;
        console.log(booksdata);
        return (
        //   <>
        //     <input
        //       //className={classes.item}
        //       type="text"
        //       placeholder="Search Book by Name, Genre"
        //       onChange={(e) => {
        //         setSearchTerm(e.target.value);
        //       }}
        //     />
        //     {booksdata.filter((booksdata)=>{
        //     if(searchTerm==""){
        //         return booksdata;
        //     }
        //     else if(booksdata.genre.toLowerCase().includes(searchTerm.toLowerCase())){
        //         return booksdata;
        //     }
        // }).map((b) => {
        //       return (
        //         <Card
        //           className={styles.root}
        //           onClick={(e) => setSelected({ selected: b.id })}
        //         >
        //           <Box
        //             key={b.id}
        //             onClick={(e) => setSelected({ selected: b.id })}
        //             className={styles.icon}
        //             height="100px"
        //           >
        //             {b.title}
        //           </Box>
        //           <div>{selected}</div>
        //           <BookDetails id={selected} />
        //         </Card>
        //       );
        //     })}
        //  </>
        <BookDetails data={booksdata} />
    //    <div>hi</div>
        );
      }}
    </Query>
  );
}

export default BookList;
