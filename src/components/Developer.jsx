import React from 'react'

const Developer = ({propName, propJob, propWage}) => {
  return (
    <div>
      <h1>My name is {propName}, i am {propJob}, i currently earn ${propWage} per month</h1>
    </div>
  )
}

export default Developer
