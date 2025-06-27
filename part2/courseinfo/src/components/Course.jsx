const Header = (props) => <h3>{props.course}</h3>

const Content = (props) => <div>{props.parts.map(part => <Part key={part.id} part={part} />)}</div>

const Part = (props) => <p>{props.part.name} {props.part.exercises}</p>

const Total = (props) => <h4>Number of exercises {props.total}</h4>

const Course = (props) => {

  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total total={ props.course.parts.reduce((sum, part) => sum + part.exercises, 0) }/>
    </div>
  )
}

export default Course