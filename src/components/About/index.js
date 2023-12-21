import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Picture this: me, a dedicated BTech student at SRM University, navigating the world of technology like a squirrel hopped up on double espresso. I code with the precision of a Swiss watchmaker, but with the occasional (hilarious) bug that results in my robot attempting the Macarena. My thirst for knowledge, however, is as bottomless as a server room's coffee pot, constantly chugging down new programming languages and diverse domains like they're going out of style.
          </p>
          <p align="LEFT">
          But here's the twist: I'm not all serious algorithms and binary code. I'm the tech enthusiast who throws in a pun faster than a router reboots after a cat walks on the keyboard. I believe laughter is the ultimate bug fix, and I'm on a mission to inject a healthy dose of it into the sometimes-stodgy world of technology. So if you're looking for someone who can talk about quantum computing while doing a Spock impression, I'm your guy (or gal, or non-binary binary breaker – I'm inclusive, even with my humor). Buckle up, because the ride through my tech-infused wonderland is gonna be a byte-tastic blast!
          </p>
          <p>
          Bonus line: And remember, if my jokes crash and burn like a faulty hard drive, at least you can say I died trying to make you laugh. Now, let's code some memories!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About