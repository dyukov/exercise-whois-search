import React from 'react'
import { render } from 'react-dom'
import WhoisSearchInput from './components/WhoisSearchInput'

class App extends React.Component {
  render () {
    return (
    <div>
      <WhoisSearchInput />
    </div>
    )
  }
}

render(<App />, document.getElementById('whoisSearchApp'));