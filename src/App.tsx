import Header from './components/Header';
import LayoutGrid from './components/LayoutGrid';
import SideBar from './components/SideBar';

function App() {
  return (
    <LayoutGrid>
      <SideBar/>
      <Header/>
    </LayoutGrid>
  );
}

export default App;
