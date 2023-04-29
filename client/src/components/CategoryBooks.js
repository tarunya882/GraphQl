import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Mutation } from "react-apollo";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Box, Button } from "@material-ui/core";
import { getBooksByCategory } from '../Queries/index';

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
    backgroundColor:"indianred",
    width: "230px",
    //borderRadius:"20px",
   // height: "calc(19vw)",
    height:"270px",
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


// const GET_BOOKS = gql`
//   query {
//     getAllBooks {
//       id,
//       title,
//       genre,
//       author
//     }
//   }
// `;



function CategoryBooks() {

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);

    getBooksByCategory({
      variables: {
        genre: e.target.value,
      },
      //refetchQueries: [{ query: getAllBooks }],
    });
    // this.setState((previousState, currentProps) => {
    //   return {
    //     id: 0,
    //     title:'',
    //     genre: '',
    //     author: ''
    //   };
    // })
  }
    const styles = useStyle();
    return (
        <>
        <Button value="Drama" onClick={e => handleSubmit(e, "value")} >Drama</Button>
        <Button onClick={handleSubmit} value="Fiction">Fiction</Button>
        <Query query={getBooksByCategory}>
            {({loading,error,data})=>{
                if(loading){
                    return <div>Loading</div>
                }
                if(error){
                    return <div>Error: {error.toString()}</div>
                }
                console.log(data);

                return(
                   <>
                   {
                   data.getBooksByCategory.map((b)=>{
                       return(
                   <Card draggable={true} className={styles.root} >
                     <Box key={b.id} className={styles.icon} height="100px">
                     {b.title}
                     </Box>
                   </Card>);
                   })}
                 </>
                );
            }}
        </Query>
        </>
    );
  }

export default CategoryBooks;
