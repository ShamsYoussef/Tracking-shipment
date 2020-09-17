import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import TrackingShipment from './components/TrackingShipment/TrackingShipment';
import { Provider } from 'react-redux';
import Store from './store/Store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Provider store={Store}>
			<Router>
				<Header> </Header>
				<Switch>
					<Route path='/track' component={TrackingShipment}></Route>
					<Route path='/' component={Home}></Route>
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
