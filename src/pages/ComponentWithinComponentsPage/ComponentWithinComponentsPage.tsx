import {
  ComponentWithinComponentsBad,
  ComponentWithinComponentsGood,
  ToggleElements
} from '../../components'

function ComponentWithinComponentsPage() {
  return (
    <ToggleElements
      component1={<ComponentWithinComponentsBad />}
      component2={<ComponentWithinComponentsGood />}
    />
  )
}

export default ComponentWithinComponentsPage
