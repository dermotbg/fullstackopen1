import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistics = ({fig}) => {
  const all = fig.good + fig.bad + fig.neutral
  const avg = (fig.good - fig.bad) / 9
  const pos = (fig.good / all) * 100
  if (all === 0){
    return(
      <p>No feedback given</p>
     )
  }
  else{
    return(
      <>
        <StatisticLine fig={fig.good} stat={'good'}/>
        <StatisticLine fig={fig.neutral} stat={'neutral'}/>
        <StatisticLine fig={fig.bad} stat={'bad'}/>
        <StatisticLine fig={all} stat={'all'}/>
        <StatisticLine fig={avg} stat={'average'}/>
        <StatisticLine fig={pos} stat={'positive'}/>
      </>
    )
  }
}

const StatisticLine = ({stat, fig}) => {
  if (stat === 'positive'){
      return(
        <p>{stat} {fig}%</p>
       )
  }
  else {
    return(
      <p>{stat} {fig}</p>
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
      <Statistics fig={scores}/>
    </div>
  )
}

export default App