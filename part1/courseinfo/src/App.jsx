const App = () => {
  const course = 'Half Stack application development'
  const content = [
    {part1: 'Fundamentals of React', exercises1: 10},
    {part2: 'Using props to pass data', exercises2: 7},
    {part3: 'State of a component', exercises3: 14}
  ]
  return (
    <div>
      <Header course={course}/>
      <Content content={content}/>
      <Total content={content}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}
const Content = (props) => {
  return (
    <>
      <p>
        {props.content[0].part1} {props.content[0].exercises1}
      </p>
      <p>
        {props.content[1].part2} {props.content[1].exercises2}
      </p>
      <p>
        {props.content[2].part3} {props.content[2].exercises3}
      </p>
    </>
  )
}


const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.content[0].exercises1 + props.content[1].exercises2 + props.content[2].exercises3}</p>
    </>
  )
}



export default App