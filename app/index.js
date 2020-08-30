import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'

// Three different aspects to Component
// State (each component manages its own state and then you build your entire application by composing those components together)
// Life cycle
// UI

// The method that we use in order to describe what the UI of the component
// is going to look like is called render()

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Popular />
            </div>
        )
    }
}

//ReactDOM.render(
//React Element first argument,
// Where to render to is the second argument
//)

ReactDOM.render(<App />, document.getElementById('app'))