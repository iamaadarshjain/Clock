import {useState, useEffect} from 'react'
import {ClockContainer, Heading, ClockImage, Time} from './styledComponents'

const Clock = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date())
    }, 1000)
    console.log("Effect excuted and interval is schedule")
    return () => {
      clearInterval(timerId)
      console.log("Cleanup fuction is called")
    }
  }, [])

  return (
    <ClockContainer>
      <Heading>Clock</Heading>
      <ClockImage
        src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
        alt="clock"
      />
      <Time> {date.toLocaleTimeString()} </Time>
    </ClockContainer>
  )
}

export default Clock
