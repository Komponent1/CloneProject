import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { serviceWorker } from './server/server';

import Heroinesnic from './heroinesnic/main';
import Repl from './repl/root';
serviceWorker.start({ onunhandledrejection: 'bypass' });

const Main: React.FC = () => (
  <div>
    <Link to="/heroinesnic"><p>Heroinesnic</p></Link>
    <Link to="/repl"><p>Repl</p></Link>
  </div>
)

const App: React.FC = () => {
  useEffect(() => {
    
  }, []);  

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="heroinesnic" element={<Heroinesnic />} />
        <Route path="repl/*" element={<Repl/>} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
