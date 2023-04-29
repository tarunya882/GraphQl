import React, { useState } from "react";
import { graphql } from "react-apollo";
import { getBookById } from "../Queries/index";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Box, Typography} from "@material-ui/core";

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
    boxShadow: "10px 10px 10px #ccc",
    cursor: "pointer",
        "&:hover": {
            transform: "scale3d(1.09, 1.01, 1.01)",
        },
   // backgroundColor: "#84accf",
    
    // opacity:"0.7",
  //  width: "250px",
   // borderRadius:"20px",
     height: "100%",
  //  height: "270px",
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
  root1: {},
  item: {
    height: "40px",
    width: "800px",
    fontSize: "larger",
    bordeRadius: "10px",
    outline: "auto",
    marginLeft: "150px",
    marginTop: "-100px",
    backgroundColor: "lightgray",
    color: "black",
    fontFamily: "revert"
  },
  flex: {
    display: "flex",
    // flexDirection: "column",
    flexWrap: "wrap",
    
    // flexDirection:"column"
  },
  icon: {
    height: "100%",
    width: "230px",
    objectFit: "cover",
    display:"block",
    [theme.breakpoints.down("sm")]: {
      height: "28vw",
    },
    // fontSize: "xxx-large",
    // //color: "aliceblue",
    // backgroundPosition: "center",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // height: "calc(500vw + 10px)",
    // width: "100%",
    // objectFit: "cover",
    // [theme.breakpoints.down("sm")]: {
    //   height: "28vw",
    // },
    // // backgroundColor: "indianred"
  },
  scroll:{
    overflowY: "auto",
            flexDirection: "column",
            display: "flex",
           // height: "10vh"
  },
  icon1:{
  //  marginBottom: "15px",
  //   marginTop: "5px",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    color:"darkblue"
  }
}));

function BookDetails(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const styles = useStyle();
  const booksdata = props.data;
  console.log("hi");
  return (
    <>
      <input
        className={styles.item}
        type="text"
        placeholder="Search by title,genre"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <div className={styles.scroll}>
      <div className={styles.flex}>
        {booksdata
          .filter((booksdata) => {
            if (searchTerm == "") {
              return booksdata;
            } else if (
              booksdata.genre.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return booksdata;
            } else if (
              booksdata.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return booksdata;
            }
          })
          .map((b) => {
            return (
              <>
                <Card
                  className={styles.root}
                >
                  <Box>
                      <img
                      src={
                        b.img
                      }
                    key={b.id}
                    // onClick={(e) => setSelected({ selected: b.id })}
                    className={styles.icon}

                    // style={{
                    //     backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8I7NuCj3Z-_isOQK7RZeSX4z0A_WStjSwWg&usqp=CAU)`,
                    // }}
                    height="100px"
                  />
                    {/* {b.title} */}
                  </Box>
                  <Box className={styles.icon1}>
                  <Typography style={{ fontWeight: 1000,color:"black" }}>{b.title}</Typography>
                  <Typography style={{ color:"gray" ,fontStyle:"italic"}}>{b.author}</Typography>
                  </Box>
                </Card>
                {/* <div>{b.title}</div> */}
                {/* <BookDetails id={selected} /> */}
              </>
            );
          })}
      </div>
      </div>
    </>
  );
}
export default BookDetails;
