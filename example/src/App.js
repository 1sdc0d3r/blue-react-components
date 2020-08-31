import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {
  ExampleComponent,
  TestComponent,
  Navigation
} from 'blue-react-components'
import 'blue-react-components/dist/index.css'

const App = () => {
  return (
    <Router>
      <ExampleComponent text='Create React Library Example 😄' />
      <TestComponent text='testing123' />
      <Navigation
        data={{
          Home: 'ToHome',
          Team: 'ToTeam',
          Work: 'ToWork',
          Blog: 'ToBlog',
          Contact: 'ToContact'
        }}
      />
    </Router>
  )
}

export default App
