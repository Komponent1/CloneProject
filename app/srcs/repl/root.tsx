import React from 'react';
import { 
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import './public/style.css';
import * as style from './style';
import server from '../server/server';
import { OpenBtn, Header, Searchbar } from './component'
import { useDisplay } from './hook';
import { Home, MyRepl, Menu } from './page';
import { CreateFolder, CreateScript } from './modal';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const Root: React.FC = () => {
  const { display, toggle } = useDisplay(true);

  const location = useLocation();
  let state = location.state as { backgroundLocation?: Location };

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Searchbar url={''} fetcher={async () => await server.request('repl', 'search')}/>
      </Header>
      <OpenBtn toggle={toggle}/>
      <style.div>
        <Menu display={display} />
        <style.main className='section'>
          <Routes location={state?.backgroundLocation || location}>
            <Route path={'/*'} element={<Home />} />
            <Route path={`myrepl/*`} element={<MyRepl />} />
          </Routes>
        </style.main>

        {state?.backgroundLocation && (
          <Routes>
            <Route path="creates/*" element={<CreateScript />} />
            <Route path="createf/*" element={<CreateFolder />} />
          </Routes>
        )}
      </style.div>
    </ThemeProvider>
  )
};

export default Root;
