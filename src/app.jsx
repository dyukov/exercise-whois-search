import React from 'react'
import { render } from 'react-dom'
//import { Provider } from 'react-redux'
//import { createStore } from 'redux'
///import todoApp from './reducers'
import WhoisSearchInput from './components/WhoisSearchInput'


class App extends React.Component {
  render () {
    return (
    <div>
      <p> Hello React project</p>
      <WhoisSearchInput text='blue' onClick={function(){ console.log("sssssss")}} />
    </div>
    )
  }
}

render(<App/>, document.getElementById('myApp'));