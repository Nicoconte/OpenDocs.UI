import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import PageContainer from './components/PageContainer/PageContainer';
import Router from './Router';

function App() {
  return (
    <PageContainer>
      <React.Fragment>
        <LoadingSpinner />
        <RouterProvider router={Router} />
      </React.Fragment>
    </PageContainer>
  )
}

export default App
