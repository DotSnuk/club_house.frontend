import { useEffect, useState } from 'react';
import { useActiveUser } from '../UserContext/UserContext';
import { useNavigate } from 'react-router-dom';
import { postUpdateAdminStatus } from '../../api/backend';

export default function Settings() {
  const { user, checkAuthStatus } = useActiveUser();
  const navigate = useNavigate();
  const [adminStatus, setAdminStatus] = useState({
    original: false,
    desired: false,
  });
  const [beenChanges, setBeenChanges] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user)
      setAdminStatus({ original: user.is_admin, desired: user.is_admin });
  }, [user]);

  async function updateAdminStatus(e) {
    e.preventDefault();
    const response = await postUpdateAdminStatus({
      user_id: user.id,
      admin: adminStatus.desired,
    });
    setBeenChanges(false);
    await checkAuthStatus();
    showMessage();
  }

  function showMessage() {
    setMessage('Settings saved');
    setTimeout(() => {
      setMessage('');
    }, 2000);
  }

  console.log(user);
  console.log(adminStatus);

  if (user === null || user.loading) return <div>Loading...</div>;
  return (
    <>
      <form onSubmit={updateAdminStatus}>
        <label htmlFor='isAdmin'>Is admin: </label>
        <input
          type='checkbox'
          name='isAdmin'
          id='isAdmin'
          checked={adminStatus.desired}
          onChange={e => {
            setAdminStatus({ ...adminStatus, desired: e.target.checked });
            setBeenChanges(true);
          }}
        />
        <button type='submit' disabled={!beenChanges}>
          Save
        </button>
      </form>
      {message}
    </>
  );
}
