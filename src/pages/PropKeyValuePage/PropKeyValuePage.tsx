import {
  PropKeyValueBad,
  PropKeyValueGood,
  ToggleElements
} from '../../components'

function PropKeyValuePage() {
  return (
    <ToggleElements
      component1={<PropKeyValueBad />}
      component2={<PropKeyValueGood />}
    />
  )
}

export default PropKeyValuePage
