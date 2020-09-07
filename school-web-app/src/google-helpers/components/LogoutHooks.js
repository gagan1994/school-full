import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import NotificationServices,{NOTIF_LOGIN_STATUS_CHANGE} from '../../services/noitification-services.js';

const clientId =
      '99221609511-mphhm1rgmbev1e2ps11ho3k9457k0gju.apps.googleusercontent.com';

let ns =new NotificationServices();


function LogoutHooks() {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    localStorage.setItem('authToken', null);
    localStorage.setItem('profileRes',null);
    ns.pushNotification(NOTIF_LOGIN_STATUS_CHANGE,null);
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <div onClick={signOut} className="button">
      <a class="nav-link" href="#">Log out</a>
    </div>
  );
}

export default LogoutHooks;
