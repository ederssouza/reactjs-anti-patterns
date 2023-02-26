import { ToggleElements, UseEffectBad, UseEffectGood } from '../../components'

function UseEffectPage() {
  return (
    <ToggleElements
      component1={<UseEffectBad />}
      component2={<UseEffectGood />}
    />
  )
}

export default UseEffectPage
