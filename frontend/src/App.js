import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ProductEditScreen from './screens/ProductEditScreen'


const App = () => {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
        <Route path='/login' component={LoginScreen}/>
        <Route path='/register' component={RegisterScreen}/>
        <Route path='/profile' component={ProfileScreen}/>
        <Route path='/product/:id' component={ProductScreen}/>
        <Route path='/productt/:id/edit' component={ProductEditScreen}/>
        <Route path='/search/:keyword' component={HomeScreen} exact/>
        <Route path='/' component={HomeScreen} exact/>
        
        </Container>
      </main>
     
      <Footer/>
    </Router>
  );
}

export default App;
