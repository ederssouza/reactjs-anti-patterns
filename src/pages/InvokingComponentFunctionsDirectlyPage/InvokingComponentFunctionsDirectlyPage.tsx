import React from 'react'
import { useState } from 'react'
import { InvokingComponentFunctionsDirectly } from '../../components'

function InvokingComponentFunctionsDirectlyPage() {
  const [sendEmail, setSendEmail] = useState(false)

  return (
    <div>
      <h2>Invoking component functions directly</h2>

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

      {/* basic example */}
      {<>{InvokingComponentFunctionsDirectly()}</>}

      {/* Uncaught Error: Rendered more hooks than during the previous render. */}
      {/* {sendEmail && <div>{InvokingComponentFunctionsDirectly()}</div>} */}

      {/* alternative implementation */}
      {/* {sendEmail &&
        React.createElement(InvokingComponentFunctionsDirectly, null)} */}

      {/* good implementation */}
      {/* {sendEmail && <InvokingComponentFunctionsDirectly />} */}
    </div>
  )
}

export default InvokingComponentFunctionsDirectlyPage
