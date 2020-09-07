import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '99221609511-mphhm1rgmbev1e2ps11ho3k9457k0gju.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
