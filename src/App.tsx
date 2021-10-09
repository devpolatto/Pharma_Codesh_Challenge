import Header from './components/Header';
import LayoutGrid from './components/LayoutGrid';
import SideBar from './components/SideBar';

import GlobalStyles from './styles/Global';

function App() {
  return (
    <LayoutGrid>
      <SideBar/>
      <Header/>
      <GlobalStyles/>
    </LayoutGrid>
  );
}

export default App;
