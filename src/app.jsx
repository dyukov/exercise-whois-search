import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
///import todoApp from './reducers'
import WhoisSearchInput from './components/WhoisSearchInput'


const store = createStore((s,a) => s)


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

render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('myApp'));


/*
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
*/