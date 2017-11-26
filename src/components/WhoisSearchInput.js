import React from 'react'
// import PropTypes from 'prop-types'

/*
const WhoisSearchInput = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

/*
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
*/ 

// export default WhoisSearchInput





class WhoisSearchInput extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'pipi',
      whoisResult: ''
    };
    this.doSearch = this.doSearch.bind(this);
  };

/*
  render() {
    return (
      //...
      <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
      //...
    );
  };

*/
  doSearch() {
    console.log("doSsearch")

    console.log("...will search : " + this.state.inputValue)
    fetch('/whois/' +  this.state.inputValue)
    .then(result => 
    {
      console.log(result)
      return result.json()
    })
    .then(data => {

    console.log("fetch done");
    console.log(data)
    console.log(data.body)
      this.setState({
        whoisResult: data.d
      });


    })
    //})
  };


  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  };

  render() {
        return (
            <div className="App">
                <input value={ this.state.inputValue } onChange={ evt => this.updateInputValue(evt) }/>
                <span onClick={ this.doSearch } > search </span>
                <hr/>
                <div>
                  <pre>
                    { this.state.whoisResult }
                  </pre>
                </div>
            </div>
        )
    }
};

export default WhoisSearchInput