import React from 'react';
import { 
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import './style.css';
import * as style from './style';
import server from '../server/server';
import { Menu, Modal, OpenBtn, Header, Searchbar } from './component'
import { useDisplay } from './hook';
import { Home, MyRepl } from './page';
import { CreateFolder } from './modal';

const Root: React.FC = () => {
  const [display, on, off, toggle] = useDisplay(true);

  const location = useLocation();
  let state = location.state as { backgroundLocation?: Location };

  return (
    <>
      <Header>
        <Searchbar url={''} fetcher={async () => await server.request('repl', 'search')}/>
      </Header>
      <OpenBtn toggle={toggle}/>
      <div style={{ display: 'flex', height: '2000px' }}>
        <Menu display={display}/>
        <style.main>
          <Routes location={state?.backgroundLocation || location}>
            <Route path={'/*'} element={<Home />} />
            <Route path={`myrepl/*`} element={<MyRepl />} />
          </Routes>
        </style.main>

        {state?.backgroundLocation && (
          <Modal>
          <Routes>
            <Route path="createf/:paths" element={<CreateFolder />} />
          </Routes>
          </Modal>
        )}
      </div>
    </>
  )
};

export default Root;
