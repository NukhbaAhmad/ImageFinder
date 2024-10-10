import React from "react";
import Unsplash from "../Api/Unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  // State initialized
  state = { images: [] };

  // Api Request
  onFormSubmit = async (SearchTerm) => {
    const response = await Unsplash.get("/search/photos", {
      params: { query: SearchTerm, per_page: 50 },
    });

    // Update State when images obtained
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div>
        <SearchBar onSearch={this.onFormSubmit} />
        <ImageList images={this.state.images} /> 
      </div>
    );
  }
}

export default App;
