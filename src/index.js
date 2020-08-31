import React from 'react'
import styles from './styles.module.css'

import { NavLink } from 'react-router-dom'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.example}>Example Component: {text}</div>
}

export const TestComponent = ({ text, color }) => {
  return (
    <div className={styles.test} style={{ color: color }}>
      Test: {text}
    </div>
  )
}

export const Navigation = (props) => {
  console.log(props)
  const { data } = props
  return (
    <nav>
      {Object.entries(data).map((e) => (
        <NavLink to={e[1]} className='nav-item' key={e}>
          {e[0]}
        </NavLink>
      ))}
    </nav>
  )
}
