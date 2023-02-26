import { ReactNode, useState } from 'react'

type Props = {
  component1: ReactNode
  component2: ReactNode
}

function ToggleElements(props: Props) {
  const { component1, component2 } = props

  const [toggleExamples, setToggleExamples] = useState(true)

  function handleClick() {
    setToggleExamples((prevState) => !prevState)
  }

  return (
    <>
      <div className="py-4">
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={handleClick}
        >
          Toggle examples
        </button>
      </div>

      {toggleExamples ? component1 : component2}
    </>
  )
}

export default ToggleElements
