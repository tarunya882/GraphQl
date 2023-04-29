import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {flowRight as compose} from 'lodash';

import {  deleteBookMutation ,getAllBooks} from '../Queries/index';

class DeleteBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:0,
    };
  }

  onNameChange = (e) => {
    const title = e.target.value;
    this.setState((previousState, currentProps) => {
      return { ...previousState, title, };
    });
  }

  onGnereChange = (e) => {
    const genre = e.target.value;
    this.setState((previousState, currentProps) => {
      return { ...previousState, genre, };
    });
  }

  onAuthorChange = (e) => {
    const author= e.target.value;
    this.setState((previousState, currentProps) => {
      return { ...previousState, author, };
    });
  }

  submit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addBookMutation({
      variables: {
        id: this.state.id,
        title:this.state.title,
        genre: this.state.genre,
        author: this.state.author,
      },
      refetchQueries: [{ query: getAllBooks }],
    });
    this.setState((previousState, currentProps) => {
      return {
        id: 0,
        title:'',
        genre: '',
        author: ''
      };
    })
  }

  render() {
    // const { loading } = this.props.getAuthorsQuery;
    // const { authors } = this.props.getAuthorsQuery;

    return (
      <form id="add-book" onSubmit={this.submit}>
        <div className="field">
          <label>Book Name: </label>
          <input type="text" value={this.state.title} onChange={this.onNameChange} />
        </div>

        <div className="field">
          <label>Gnere: </label>
          <input type="text" value={this.state.genre} onChange={this.onGnereChange} />
        </div>

        <div className="field">
          <label>Author: </label>
          <input type="text" value={this.state.author} onChange={this.onAuthorChange} />
        </div>

        

        <button>Add Book</button>
      </form>
    );
  }
}

export default compose(
  //graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" }),
)(AddBook);
