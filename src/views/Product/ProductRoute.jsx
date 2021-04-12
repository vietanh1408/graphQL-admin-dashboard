import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import ProductInfo from './ProductInfo'
import ProductList from './ProductList'

function ProductRoute() {

    const { path } = useRouteMatch()
    return (
        <Switch>
            <Route exact path={`${path}`} component={ProductList} />
            <Route exact path={`${path}/:id`} component={ProductInfo} />
        </Switch>
    )
}

export default ProductRoute
