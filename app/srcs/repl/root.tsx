import React from 'react';
import { 
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import './style.css';
import server from '../server/server';
import { Menu, Modal, OpenBtn, Header, Searchbar } from './component'
import { useDisplay } from './hook';
import { Home, MyRepl } from './page';

const Root: React.FC = () => {
  const [display, on, off, toggle] = useDisplay(false);

  const location = useLocation();
  let state = location.state as { backgroundLocation?: Location };

  return (
    <>
      <Header>
        <Searchbar url={''} fetcher={async () => await server.request('repl', 'search')}/>
      </Header>
      <OpenBtn toggle={toggle}/>
      <div style={{ display: 'flex', marginTop: '40px', height: '2000px' }}>
        <Menu display={display}/>
        <Routes location={state?.backgroundLocation || location}>
          <Route path={'/*'} element={<Home />} />
          <Route path={`myrepl`} element={<MyRepl />} />
        </Routes>

        {state?.backgroundLocation && (
          <Routes>
            <Route path="create/:lang" element={<Modal />} />
          </Routes>
        )}
      </div>
    </>
  )
};

export default Root;
