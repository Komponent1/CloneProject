import React from 'react';
import { 
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { Menu, Modal, OpenBtn, Header } from './component'
import { useDisplay } from './hook';
import { Home, MyRepl } from './page';

const Root: React.FC = () => {
  const [display, on, off, toggle] = useDisplay(false);

  const location = useLocation();
  let state = location.state as { backgroundLocation?: Location };

  return (
    <>
      <Header/>
      <OpenBtn toggle={toggle}/>
      <div style={{ display: 'flex', 'margin-top': '30px' }}>
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
