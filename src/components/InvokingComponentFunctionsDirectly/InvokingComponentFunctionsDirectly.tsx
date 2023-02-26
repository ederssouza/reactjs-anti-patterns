import { useState } from 'react'

function InvokingComponentFunctionsDirectly() {
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

export default InvokingComponentFunctionsDirectly
