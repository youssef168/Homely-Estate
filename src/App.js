import React, { Suspense } from "react";
import "./App.css";
import "./scss/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundry from "./components/ErrorBoundry";
const AppRouter = React.lazy(() => import('./Router'))

function App() {
  return (
    <div className="App">
      <ErrorBoundry>
        <Suspense fallback={<h1>LOADING</h1>}>
          {/* Contains All Website Routes */}
          <AppRouter />
        </Suspense>
      </ErrorBoundry>
    </div>
  );
}

export default App;
