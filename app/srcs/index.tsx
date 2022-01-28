import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Heroinesnic from './heroinesnic/main';
import Repl from './repl/root';

const Main: React.FC = () => (
  <div>
    <Link to="/heroinesnic">Heroinesnic</Link>
    <Link to="/repl">Repl</Link>
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