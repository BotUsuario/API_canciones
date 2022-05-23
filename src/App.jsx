import AppLetra from "./components/AppLetra"
import {LetrasProvider} from "./context/LetrasProvider"

function App() {
  return (
    <LetrasProvider>
      <AppLetra/>
    </LetrasProvider>
  )
}

export default App
