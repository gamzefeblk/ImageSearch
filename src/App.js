import React, {
  Component
} from 'react'
import "./App.css"
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import axios from 'axios'


export default class App extends Component {

  state={
    images : []
  }
  "https://api.unsplash.com/search/photos"

  // handleFormSubmit =(term) => {
  //    axios.get("https://api.unsplash.com/search/photos", {
  //      params:{query: term},
  //      headers : {
  //       Authorization:"Client-ID nP4CCY-Dhch9lOu6TG8nomGtZY2PY8tQcmot6zqOE6o"
  //      }
  //    }).then((res)=>console.log(res))
  // }


  handleFormSubmit =async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params:{query: term},
      headers : {
       Authorization:"Client-ID nP4CCY-Dhch9lOu6TG8nomGtZY2PY8tQcmot6zqOE6o"
      }
    })
    this.setState({images:response.data.results})
    console.log(response);
 }

 
  render() {
     return(
     
      <div className='container'><SearchBar handleFormSubmit={this.handleFormSubmit} />
      <ImageList 
      images= {this.state.images}/></div>
     )

    
  }
}