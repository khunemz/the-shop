import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="ui container" style={{ marginTop: '60px'}}>
          <Switch>
            <Route path="/" exact component={ProductList}></Route>
            <Route path="/product/:productId" exact component={ProductDetail}></Route>
            <Route>Not found</Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
