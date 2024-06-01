import { Provider, useSelector } from 'react-redux';
import React, { useState } from 'react'
import appStore from './store/appStore';
import { Routes, Route } from 'react-router-dom'
import Body from './components/Body'
function App() {
  return (
    <>
     <Provider store={appStore}>
     <div>
      <Body/>
    </div>
    </Provider>
    </>
  )
}

export default App