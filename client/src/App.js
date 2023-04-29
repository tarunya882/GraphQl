import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import BookList from '../src/components/BookList';
import React from 'react';
import AddBook from './components/AddBook';
import Header from '../src/components/Header';
import CategoryBooks from '../src/components/CategoryBooks';
import { makeStyles } from '@material-ui/core/styles';
import "./style.css";


const client=new ApolloClient({uri:'http://localhost:3001/graphql'});
const useStyles = makeStyles((theme) => ({
    app: {backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    //  backgroundColor: "pink",
      height:"100%",
    }
}));

function App() {
  const classes = useStyles();
  return (
     <ApolloProvider client={client}>
       <Header />
       <div className={classes.app}>
       {/* <div className={classes.app}  style={{ backgroundImage: `url(https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNDk4NjkzMC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY3MzQ2ODIzOX0._2lVOvC8EBybLLxpMdisTBdWOE_4X0SKaNlna-8WBME/img.jpg?width=1245&quality=85&coordinates=0%2C0%2C0%2C0&height=700)` }}> */}
     <AddBook />
     {/* <br></br> */}
     
        <BookList />
        {/* <CategoryBooks /> */}
     
    </div>
    </ApolloProvider>
  );
}

export default App;
