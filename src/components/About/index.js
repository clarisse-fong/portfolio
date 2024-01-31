import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Hi, I'm Clarisse and I'm a full-stack software engineer with a
          background in technical writing.
        </p>
        <p>
          My proficiency in technical writing offers a unique advantage in
          articulating software design principles and conveying complex coding
          concepts, facilitating effective collaboration and knowledge sharing
          within development teams.{' '}
        </p>
        <p>
          I have a strong command of JavaScript for comprehensive front-end and
          back-end programming.
        </p>
      </div>
    </div>
  )
}

export default About
