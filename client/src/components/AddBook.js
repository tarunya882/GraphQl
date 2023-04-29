import React, { Component } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import Modal from "react-modal";

import { addBookMutation, getAllBooks } from "../Queries/index";

const style = {
  btn: {
    marginLeft: "1250px",
    width: "110px",
    fontFamily: "fantasy",
    fontSize: "larger",
    fontStyle: "normal",
    fontWeight: "bold",
    borderRadius: "20px",
    height: "40px",
    backgroundColor:"#84accf",
    color:"white"
  },
  btn1:{
    marginBottom: "30px",
    marginLeft: "520px",
    backgroundColor: "#9595ac"
  },
  field:{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      paddingBotton:"30px"
  },
  inp:{
      paddingBotton:"30px"
  }
};

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: "",
      genre: "",
      author: "",
      img:"",
      modalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  //const [modalIsOpen,setIsOpen] = React.useState(false);
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  //   afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = '#f00';
  //   }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  onIdChange = (e) => {
    const id = parseInt(e.target.value);
    this.setState((previousState, currentProps) => {
      return { ...previousState, id };
    });
  };

  onNameChange = (e) => {
    const title = e.target.value;
    this.setState((previousState, currentProps) => {
      return { ...previousState, title };
    });
  };

  onGnereChange = (e) => {
    const genre = e.target.value;
    this.setState((previousState, currentProps) => {
      return { ...previousState, genre };
    });
  };

  onAuthorChange = (e) => {
    const author = e.target.value;
    this.setState((previousState, currentProps) => {
      return { ...previousState, author };
    });
  };
  onImgChange = (e) => {
    const img =e.target.value;
    this.setState((previousState, currentProps) => {
      return { ...previousState, img };
    });
  };

  submit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addBookMutation({
      variables: {
        id: this.state.id,
        title: this.state.title,
        genre: this.state.genre,
        author: this.state.author,
        img:this.state.img
      },
      refetchQueries: [{ query: getAllBooks }],
    });
    console.log(this.state.id);
    console.log(this.state.title);
    this.setState((previousState, currentProps) => {
      return {
        id: 0,
        title: "",
        genre: "",
        author: "",
        img:""
      };
    });
  };

  render() {
    return (
      <>
        <button style={style.btn} onClick={this.openModal}>
          Add Book
        </button>
        <div  style={style.mdl} >
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal} style={style.btn1}>X</button>
          <form id="add-book" onSubmit={this.submit}>
              <div style={style.field}>
            <div className="field" style={style.inp}>
              <label>Book id: </label>
              <input
                type="number"
                value={this.state.id}
                onChange={this.onIdChange}
              />
            </div>
            <div className="field" style={style.inp}>
              <label>Book Name: </label>
              <input
                type="text"
                value={this.state.title}
                onChange={this.onNameChange}
              />
            </div>

            <div className="field" style={style.inp}>
              <label>Gnere: </label>
              <input
                type="text"
                value={this.state.genre}
                onChange={this.onGnereChange}
              />
            </div>

            <div className="field" style={style.inp}>
              <label>Author: </label>
              <input
                type="text"
                value={this.state.author}
                onChange={this.onAuthorChange}
              />
            </div>

            <div className="field" style={style.inp}>
              <label>Image: </label>
              <input
                type="text"
                value={this.state.img}
                onChange={this.onImgChange}
              />
            </div>

            <button>
          Add Book
        </button>
        </div>
          </form>
        </Modal>
        </div>
      </>
    );
  }
}

export default compose(
  //graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
