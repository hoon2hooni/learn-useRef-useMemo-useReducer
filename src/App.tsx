import Input from "./components/Input";
import Users from "./components/Users";
import { AppContextProvider } from "./AppContext";
import "./App.css";

function App() {
  return (
    <>
      <AppContextProvider>
        <Input />
        <Users />
      </AppContextProvider>
    </>
  );
}

export default App;
