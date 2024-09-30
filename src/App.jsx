import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { AssetManagerContextProvider } from './contexts/AssetManger';

import PaperMaker from './pages/paperMaker';
import Account from './pages/account';
import Auth from './pages/auth';

function App() {
    return (
        <AssetManagerContextProvider>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Account />}/>
                    <Route exact path='/work-space' element={<PaperMaker />}/>


                    <Route exact path='/auth' element={<Auth />}/>

                    {/* Not found */}
                    {/* <Route path='*' element={ <Navigate to="/404" /> } /> */}
                    {/* <Route path='/404' element={< NotFound />} /> */}
                </Routes>
            </Router>
        </AssetManagerContextProvider>
    );
}

export default App;
