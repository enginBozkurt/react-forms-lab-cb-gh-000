import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
     poem: '',
     hidden: false
   };
  }

  handleChange = (event) => {
    const content = event.target.value;
    this.setState({
      poem: content,
      hidden: this.checkPoem(poem)
    });
  }

  checkPoem(poem){
   const lines = poem.split('\n');
   const wordsPerLine = lines.map(line => line.trim().split(' ').length);
   const check = (
     lines.length === 3 &&
     wordsPerLine[0] === 5 &&
     wordsPerLine[1] === 3 &&
     wordsPerLine[2] === 5
   );
   return check;
 }


  render() {
    return (
      <div>
        <textarea
        rows="3" cols="60"
        name="poem"
        value={this.state.poem}
        onChange={this.handleChange}
        />
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;
