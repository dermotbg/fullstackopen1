import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Active = ({fig}) => {
  const all = fig.good + fig.bad + fig.neutral
  const avg = (fig.good - fig.bad) / 9
  const pos = ((fig.good / 9)) * 100
  if (all === 0){
    return(
      <p>No feedback given</p>
     )
  }
  else{
    return(
      <>
        <p>good {fig.good}</p>
        <p>neutral {fig.neutral}</p>
        <p>bad {fig.bad}</p>
        <Stats fig={all} stat={'all'}/>
        <Stats fig={avg} stat={'avg'}/>
        <Stats fig={pos} stat={'pos'}/>
      </>
    )
  }
}

const Stats = ({stat, fig}) => {
  if (stat === 'all'){
   return(
    <p>all {fig}</p>
   )
  }
  else if (stat === 'avg'){
    return(
      <p>average {fig}</p>
     )
  }
  else {
    return(
      <p>positive {fig}%</p>
     )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [scores, setScores] = useState({good: 0, neutral: 0, bad: 0})

  const handleGoodClick = () => {
    const updatedGood = scores.good + 1
    setScores({...scores, good: updatedGood})
  }
  const handleNeutralClick = () => {
    const updatedNeut = scores.neutral + 1
    setScores({...scores, neutral: updatedNeut})
  }
  const handleBadClick = () => {
    const updatedBad = scores.bad + 1
    setScores({...scores, bad: updatedBad})
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text={'good'}/>
      <Button handleClick={handleNeutralClick} text={'neutral'}/>
      <Button handleClick={handleBadClick} text={'bad'}/>
      <h1>statistics</h1>
      <Active fig={scores}/>
    </div>
  )
}

export default App