import { useState } from 'react'

// TODO: create a new component
function EmailField() {
  const [email, setEmail] = useState('')

  return (
    <div>
      <label htmlFor="email" className="form-label">
        Email
      </label>

      <input
        type="email"
        id="email"
        className="form-control"
        value={email}
        onChange={(event) => setEmail(event?.target.value)}
      />
    </div>
  )
}

function ComponentWithinComponentsGood() {
  const [sendEmail, setSendEmail] = useState(false)

  return (
    <section>
      <h2 className="text-success">Component within components (good)</h2>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexCheckDefault"
          checked={sendEmail}
          onChange={(event) => setSendEmail(event.target.checked)}
        />

        <label className="form-check-label" htmlFor="flexCheckDefault">
          Send email
        </label>
      </div>

      {sendEmail && <EmailField />}
    </section>
  )
}

export default ComponentWithinComponentsGood
