import {
  AbortingFetchRequestsBad,
  AbortingFetchRequestsGood,
  ToggleElements
} from '../../components'

function AbortingFetchRequestsPage() {
  return (
    <ToggleElements
      component1={<AbortingFetchRequestsBad />}
      component2={<AbortingFetchRequestsGood />}
    />
  )
}

export default AbortingFetchRequestsPage
