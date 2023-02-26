/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'

function UseEffectGood() {
  /**
   * solution => example 1
   */
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  /**
   * solution => example 2
   */
  // const [count, setCount] = useState(0)
  // const [name, setName] = useState('')

  // useEffect(() => {
  //   console.log(`Count: ${count}`)
  //   console.log(`Name: ${name}`)
  // }, [count, name])

  /**
   * solution => example 3
   */
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')

  // const fullName = `${firstName} ${lastName}`

  return (
    <section>
      <h2 className="text-success">useEffect (good)</h2>

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

export default UseEffectGood
