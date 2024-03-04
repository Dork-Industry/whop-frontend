import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthProvider.js';
import { BrowserRouter } from 'react-router-dom';

import AdminRouting from './Nav/AdminRouting';
import SellerRouting from './Nav/SellerRouting';
import UserRouting from './Nav/UserRouting';
import RootRouter from './Nav/RootRouter';
import PrivateRoutes from './Nav/PrivateRoutes';

import { PageProvider } from './Context/Pagecontxt.js';

//import P404 from "./Pages/P404";

function App() {
    return (
        <>
            <BrowserRouter>
                <AuthProvider>
                    <PageProvider>
                        <Routes>
                            <Route element={<PrivateRoutes />}>
                                <Route path="/admin/*" element={<AdminRouting />} exact></Route>
                                <Route path="/seller/*" element={<SellerRouting />} exact></Route>
                                <Route path="/users/*" element={<UserRouting />} exact></Route>
                            </Route>
                            <Route exact path="/*" element={<RootRouter />}></Route>
                        </Routes>
                    </PageProvider>
                </AuthProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
