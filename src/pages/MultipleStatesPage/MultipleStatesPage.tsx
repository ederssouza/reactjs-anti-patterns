import {
  MultipleStatesBad,
  MultipleStatesGood,
  ToggleElements
} from '../../components'

function MultipleStatesPage() {
  return (
    <ToggleElements
      component1={<MultipleStatesBad />}
      component2={<MultipleStatesGood />}
    />
  )
}

export default MultipleStatesPage
