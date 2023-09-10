import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Admin Panel/Home';
import Order from './Admin Panel/Order';
import Add_Product from './Admin Panel/Add_Product';
import Profile from './Admin Panel/Profile';
import Login from './Admin Panel/Login';
import Register from './Admin Panel/Register';
import Reset_Password from './Reset_Password';
import Add_to_Cart from './Admin Panel/Add_to_Cart';
import WishList from './Admin Panel/WishList';
import Contact from './Admin Panel/Contact';
import Subscribe from './Admin Panel/Subscribe';

  // Project-15 :- Final Project (Admin Panel) (// git new account-2 --"prashantwebdeveloper") 
    
function App() {


    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index path='/' element={<Home />} />
                        <Route path='/Order' element={<Order />} />
                        <Route path='/Add_Product' element={<Add_Product />} />
                        <Route path='/Profile' element={<Profile />} />
                        <Route path='/Login' element={<Login />} />
                        <Route path='/Register' element={<Register />} />
                        <Route path='/Reset_Password' element={<Reset_Password />} />
                        <Route path='/Add_to_Cart' element={<Add_to_Cart />} />
                        <Route path='/WishList' element={<WishList />} />
                        <Route path='/Contact' element={<Contact />} />
                        <Route path='/Subscribe' element={<Subscribe />} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
