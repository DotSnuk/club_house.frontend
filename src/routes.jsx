import App from './App';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import ForumContainer from './components/ForumContainer/ForumContainer';
import PostsContainer from './components/PostsContainer/PostsContainer';
import Settings from './components/Settings/Settings';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/register', element: <RegisterForm /> },
      { path: '/login', element: <Login /> },
      { path: '/home', element: <Home /> },
      { path: '/forum', element: <ForumContainer /> },
      { path: '/settings', element: <Settings /> },
      { path: '/posts/:id?', element: <PostsContainer /> },
    ],
  },
];
