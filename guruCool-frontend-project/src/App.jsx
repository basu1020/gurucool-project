import './App.css'
import { Theme } from '@radix-ui/themes';
import SearchBar from './components/SearchBar';
import '@radix-ui/themes/styles.css';


function App() {

  return (
    <>
      <Theme
        appearance="dark"
        accentColor="red"
        panelBackground="solid"
        scaling="100%"
        radius="full"
      >
        <SearchBar />
      </Theme>

    </>
  )
}

export default App
