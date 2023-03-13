import { RouterProvider } from 'react-router-dom';
import './App.css';
import PageContainer from './components/PageContainer/PageContainer';
import Router from './Router';

function App() {
  return (
    <PageContainer>
      <RouterProvider router={Router} />
    </PageContainer>
  )
}

export default App
