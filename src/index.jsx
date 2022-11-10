import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import App from './App';
import About from './pages/About'
import Home from './pages/Home'
import Housing from './pages/Housing'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/housing/:id">
                    <Housing />
                </Route>
                <Route path="/*">
                    <Error />
                </Route>
            </Switch>
            <Footer />
        </Router>
    </React.StrictMode>
)
