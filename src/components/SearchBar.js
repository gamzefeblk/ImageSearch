import React, { Component } from 'react';

export default class SearchBar extends Component {
        constructor() {
        super()
        this.state={
          value:"",
        }
    
      }
    // handleInputChange=(e)=>{
    //     this.setState({value:e.target.value});
    //   }
        handleSubmit = (e) => {
          e.preventDefault()
          this.props.handleFormSubmit(this.state.value);
        }
  render() {
    return  <div className='input-card'>
    <form onSubmit={this.handleSubmit}>
      <label>Your Favorite Word    </label>
     <input className='text'
      onChange={this.handleInputChange}
      onChange={(e) =>this.setState({value:e.target.value})}
      
      type="text"
      value={this.state.value}></input> 

     <input className='button'
      value="Search"
      type="submit"
      ></input>
    </form>

    </div>;
  }
}
