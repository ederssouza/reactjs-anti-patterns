import { useState } from 'react'

function MultipleStatesBad() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log({ email, password })
    clearFormFields()
  }

  function clearFormFields() {
    setEmail('')
    setPassword('')
  }

  return (
    <section>
      <h2 className="text-danger">Multiple states (bad)</h2>

      <form noValidate onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>

          <input
            type="email"
            id="email"
            value={email}
            className="form-control"
            onChange={(event) => setEmail(event?.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>

          <input
            type="password"
            id="password"
            value={password}
            className="form-control"
            onChange={(event) => setPassword(event?.target.value)}
          />
        </div>

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export default MultipleStatesBad
