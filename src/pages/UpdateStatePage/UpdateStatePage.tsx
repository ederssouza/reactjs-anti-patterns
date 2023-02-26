import {
  ToggleElements,
  UpdateStateBad,
  UpdateStateGood
} from '../../components'

function UpdateStatePage() {
  return (
    <ToggleElements
      component1={<UpdateStateBad />}
      component2={<UpdateStateGood />}
    />
  )
}

export default UpdateStatePage
