import { ToggleElements, UseMemoBad, UseMemoGood } from '../../components'

function UseMemoPage() {
  return (
    <ToggleElements component1={<UseMemoBad />} component2={<UseMemoGood />} />
  )
}

export default UseMemoPage
