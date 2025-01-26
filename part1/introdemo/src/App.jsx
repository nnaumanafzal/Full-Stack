const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = x => {
    return (
      <h1>{x.course}</h1>
    )
  }

  const Part = x => {
    return (
      <p>
        {x.name} {x.exercises}
      </p>
    )
  }

  const Content = x => {
    return (
      <div>
        <Part name={x.parts[0].name} exercises={x.parts[0].exercises} />
        <Part name={x.parts[1].name} exercises={x.parts[1].exercises} />
        <Part name={x.parts[2].name} exercises={x.parts[2].exercises} />
      </div>
    )
  }

  const Total = x => {
    return (
      <p>Number of exercises {x.parts[0].exercises + x.parts[1].exercises + x.parts[2].exercises}</p>
    )
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App