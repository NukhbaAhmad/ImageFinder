import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { val: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.val)
    this.props.onSearch(this.state.val);
  };
  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            className="search-input"
            value={this.state.val}
            placeholder="Search here"
            onChange={(e) => {
              this.setState({ val: e.target.value });
            }}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
