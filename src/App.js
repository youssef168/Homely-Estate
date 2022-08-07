import "./App.css";
import AppRouter from "./Router";
import "./scss/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* Contains All Website Routes */}
      <AppRouter />
    </div>
  );
}

export default App;
