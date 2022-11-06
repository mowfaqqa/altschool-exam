import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout"
import Home from "./screens/Home"
import UseCounterCounter from "./screens/UseCounterScreen"
import UseReducerCounter from "./screens/UseReducerCounter"
import ErrorBoundaryCounter from "./screens/ErrorBoundaryCounter"
import NotFound from './screens/NotFound'
import { ErrorBoundary } from './components/ErrorBoundary'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='counter1' element={<UseCounterCounter />} />
            <Route path='counter2' element={<UseReducerCounter />} />
            <Route path='errorBoundary' element={<ErrorBoundary><ErrorBoundaryCounter /></ErrorBoundary>} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
