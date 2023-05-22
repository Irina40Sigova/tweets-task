import { Provider } from 'react-redux';
import { store } from '../redux/store';

import { Navigate, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Tweets from '../pages/Tweets';
import Layout from './Layout/Layout';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </Provider>
  );
}

export default App;
