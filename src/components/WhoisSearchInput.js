import React from 'react'

class WhoisSearchInput extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'google.com',
      whoisResult: ''
    };
    this.doSearch = this.doSearch.bind(this);
  };

  requestWhois() {
    fetch('/whois/' + this.state.inputValue)
    .then(result => 
      {
        return result.json()
      })
    .then(data => {
      this.setState({
          whoisResult: data.d
        });
    })
  };


  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  };

  render() {
        return (
            <div className='whoisSearch'>
              <input type='text' value={ this.state.inputValue } onChange={ evt => this.updateInputValue(evt) } />
              <button className='button' onClick={ this.requestWhois } > search </button>
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