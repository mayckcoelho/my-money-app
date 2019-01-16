import React from 'react'
import { HashRouter } from 'react-router-dom'

import Header from '../commom/template/header'
import SideBar from '../commom/template/sideBar'
import Footer from '../commom/template/footer'
import Messages from '../commom/msg/messages'

import Routes from './routes'

export default props => (
    <HashRouter>
        <div className='wrapper'>
            <Header />
            <SideBar />
            <Routes />
            <Footer />
            <Messages />
        </div>
    </HashRouter>
)