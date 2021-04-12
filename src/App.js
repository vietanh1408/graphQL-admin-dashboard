import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Layout } from 'antd';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/LayoutComponents/Header';
import MenuLeft from './components/LayoutComponents/MenuLeft';
import NotFoundPage from './components/NotFoundPage';
import './scss/index.scss';
import AddItem from './views/AddItem';
import CategoriesRoute from './views/Categories/CategoriesRoute';
import Home from './views/Home';
import ProductRoute from './views/Product/ProductRoute';

const { Content } = Layout;

function App() {
	const client = new ApolloClient({
		uri: 'http://localhost:4000/graphql',
		cache: new InMemoryCache()
	});
	return (
		<ApolloProvider client={client}>
			<div className="app">
				<Layout style={{ minHeight: '100vh' }}>
					<MenuLeft />
					<Layout className="site-layout">
						<Header />
						<Content className="content">
							<Switch>
								<Route exact path="/" component={Home} />
								<Route path="/add-item" component={AddItem} />
								<Route path="/new-products" component={ProductRoute} />
								<Route path="/categories" component={CategoriesRoute} />
								<Route component={NotFoundPage} />
							</Switch>
						</Content>
					</Layout>
				</Layout>
			</div>
		</ApolloProvider>
	);
}

export default App;
