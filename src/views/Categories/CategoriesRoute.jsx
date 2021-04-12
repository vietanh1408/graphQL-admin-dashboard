import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import ProductInfo from '../Product/ProductInfo'
import CategoriesList from './CategoriesList'

function CategoriesRoute() {

    const { path } = useRouteMatch()
    return (
        <Switch>
            <Route exact path={`${path}`} component={CategoriesList} />
            <Route exact path={`${path}/:id`} component={ProductInfo} />
        </Switch>
    )
}

export default CategoriesRoute
