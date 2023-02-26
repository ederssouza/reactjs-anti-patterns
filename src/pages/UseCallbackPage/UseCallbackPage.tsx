import {
  ToggleElements,
  UseCallbackBad,
  UseCallbackGood
} from '../../components'

function UseCallbackPage() {
  return (
    <ToggleElements
      component1={<UseCallbackBad />}
      component2={<UseCallbackGood />}
    />
  )
}

export default UseCallbackPage
