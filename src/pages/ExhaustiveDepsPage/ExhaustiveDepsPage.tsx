import {
  ExhaustiveDepsBad,
  ExhaustiveDepsGood,
  ToggleElements
} from '../../components'

function ExhaustiveDepsPage() {
  return (
    <ToggleElements
      component1={<ExhaustiveDepsBad />}
      component2={<ExhaustiveDepsGood />}
    />
  )
}

export default ExhaustiveDepsPage
