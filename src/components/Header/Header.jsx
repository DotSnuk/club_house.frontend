import { useActiveUser } from '../UserContext/UserContext';
import { Link } from 'react-router-dom';

export default function Header() {
  const { user, loading, logout } = useActiveUser();
  if (loading) return <div>Loading...</div>;
  return (
    <nav>
      {user === null ? (
        <>
          <Link to='/register'>Register</Link>
          <Link to='/login'>Login</Link>
          <Link to='/forum'>Forum</Link>
        </>
      ) : (
        <>
          <Link to='/settings'>{user.firstname}</Link>
          <Link to='/forum'>Forum</Link>
          <input type='button' onClick={() => logout()} value='logout' />
        </>
      )}
    </nav>
  );
}
