import React, { useCallback } from 'react';
import { 
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import './public/style.css';
import * as style from './style';
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

  const fetcher = useCallback(async () => {
    const data = await fetch('/api/cmd').then(res => res.json());
    
    return ({
      data: data.command
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Searchbar url={''} fetcher={fetcher}/>
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
