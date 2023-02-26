import { useState } from 'react'

type FormFields = {
  email: string
  password: string
}

function setDefaultValues() {
  return {
    email: '',
    password: ''
  }
}

function MultipleStatesGood() {
  const [fields, setFields] = useState<FormFields>(setDefaultValues)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    setFields((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(fields)
    clearFormFields()
  }

  function clearFormFields() {
    setFields(setDefaultValues)
  }

  return (
    <section>
      <h2 className="text-success">Multiple states (good)</h2>

      <form noValidate onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>

          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            value={fields.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>

          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            value={fields.password}
            onChange={handleChange}
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

export default MultipleStatesGood
