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
  const [values, setValues] = useState<FormFields>(setDefaultValues)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    setValues((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(values)
    clearFormFields()
  }

  function clearFormFields() {
    setValues(setDefaultValues)
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
            value={values.email}
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
            value={values.password}
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
