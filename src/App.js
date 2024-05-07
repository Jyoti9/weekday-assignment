
import './App.css';
import Filters from './components/Filters';
import Header from './components/Header';
import JobList from './components/JobList';
import {Provider} from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <Header />
      <Filters />
      <JobList />
    </Provider>
  );
}

export default App;
