
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Chart from './components/Chart/Chart';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Roots from './Roots/Roots';

function App() {

  const router = createBrowserRouter([
    {path:'/',
     element:<Roots></Roots>,
     errorElement:<ErrorPage></ErrorPage>,
      children:[
      {path:'/', element:<Home></Home>},
      {path:'home', element:<Home></Home>},
      {path:'chart', element:<Chart></Chart>},
      {path:'blog', element:<Blog></Blog>},
      {path:'about', element:<About></About>}
    ]}
  ])


  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
