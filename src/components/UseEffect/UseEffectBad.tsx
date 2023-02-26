/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'

function UseEffectBad() {
  /**
   * example 1
   */
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count: ${count}`
  })

  /**
   * example 2 - multiple useEffects
   */
  // const [count, setCount] = useState(0)
  // const [name, setName] = useState('')

  // useEffect(() => {
  //   console.log(`Count: ${count}`)
  // })

  // useEffect(() => {
  //   console.log(`Name: ${name}`)
  // })

  /**
   * example 3 - unnecessary useEffect
   */
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [fullName, setFullName] = useState('')

  // useEffect(() => {
  //   setFullName(`${firstName} ${lastName}`)
  // }, [firstName, lastName])

  return (
    <section>
      <h2 className="text-danger">useEffect (bad)</h2>

      {/* <div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            First name
          </label>
          <input
            type="text"
            value={firstName}
            className="form-control"
            onChange={(event) => setFirstName(event?.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Last name
          </label>
          <input
            type="text"
            value={lastName}
            className="form-control"
            onChange={(event) => setLastName(event?.target.value)}
          />
        </div>

        <p>{fullName}</p>
      </div> */}
    </section>
  )
}

export default UseEffectBad
