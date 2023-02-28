import { Routes, Route } from 'react-router-dom'
import { Layout } from './components'
import {
  ComponentWithinComponentsPage,
  HomePage,
  InvokingComponentFunctionsDirectlyPage,
  MultipleStatesPage,
  NoMatchPage,
  AbortingFetchRequestsPage,
  PropKeyValuePage,
  UseEffectPage,
  UpdateStatePage,
  UseMemoPage,
  UseCallbackPage,
  ExhaustiveDepsPage
} from './pages'

function App() {
  return (
    <div className="container">
      <h1>ReactJS Anti-Patterns</h1>
      <p>Examples of Anti-Patterns in ReactJS applications</p>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/multiple-states" element={<MultipleStatesPage />} />

          <Route
            path="/invoking-component-functions-directly"
            element={<InvokingComponentFunctionsDirectlyPage />}
          />

          <Route
            path="/component-within-components"
            element={<ComponentWithinComponentsPage />}
          />

          <Route
            path="/aborting-fetch-requests"
            element={<AbortingFetchRequestsPage />}
          />

          <Route path="/prop-key-value" element={<PropKeyValuePage />} />
          <Route path="/use-effect" element={<UseEffectPage />} />
          <Route path="/update-state" element={<UpdateStatePage />} />
          <Route path="/use-memo" element={<UseMemoPage />} />
          <Route path="/use-callback" element={<UseCallbackPage />} />
          <Route path="/exhaustive-deps" element={<ExhaustiveDepsPage />} />
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
