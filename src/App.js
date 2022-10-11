
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Chart from './components/Chart/Chart';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import QuizPage from './components/QuizPage/QuizPage';
import Roots from './Roots/Roots';

function App() {

  const router = createBrowserRouter([
    {path:'/',
     element:<Roots></Roots>,
     errorElement:<ErrorPage></ErrorPage>,
     loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
      children:[
      {path:'/', element:<Home></Home>},
      {path:'home', element:<Home></Home>},
      {path:'chart', element:<Chart></Chart>},
      {path:'blog', element:<Blog></Blog>},
      {path:'about', element:<About></About>},
      {path:'/home/:id',
      loader:({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
       element:<QuizPage></QuizPage>}
    ]}
  ])


  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
