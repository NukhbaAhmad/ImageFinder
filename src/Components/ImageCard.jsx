import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    // Spans = 0
    this.state = { spans: 0 };
    // Ref creation
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  //   On load of all images
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    // State updated -> Re-render -> span set indiviually for all images according to height
    this.setState({ spans: spans });
  };
  render() {
    // Destructuring of the image
    const { alt_description, urls } = this.props.image;
    return (
      // Set span
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        {/* Image Render */}
        <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
      </div>
    );
  }
}
export default ImageCard;
