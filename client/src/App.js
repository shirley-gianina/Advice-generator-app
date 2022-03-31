import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Attributions from "./components/Attributions/Attributions";


function App() {
  return (
    <>
      <main>
        <AppRoutes />
      </main>
      <footer>
        <Attributions />
      </footer>
    </>
  );
}

export default App;
