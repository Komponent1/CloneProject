import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Heroinesnic from './heroinesnic/main';

const Main: React.FC = () => (
  <div>
    <Link to="/heroinesnic">Heroinesnic</Link>
  </div>
)

const App: React.FC = () => {
  useEffect(() => {
    
  }, []);  

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/heroinesnic" element={<Heroinesnic />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
