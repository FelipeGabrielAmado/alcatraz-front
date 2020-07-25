import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/main'
import Movie from './pages/movie'
import Category from './pages/category'
import Header from './components/Header'
import Footer from './components/Footer'    

const Routes = () => (
    <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/movie/:id" component={Movie} />
                <Route exact path="/categories/:id" component={Category} />
            </Switch>
        <Footer />
    </BrowserRouter>
);

export default Routes;