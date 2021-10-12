import Header from './components/Header';
import LayoutGrid from './components/LayoutGrid';
import SideBar from './components/SideBar';
import Main from './components/Main';

function App() {
  return (
    <LayoutGrid>
      <SideBar/>
      <Header/>
      <Main/>
    </LayoutGrid>
  );
}

export default App;
