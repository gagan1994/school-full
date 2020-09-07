import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import '../google-main.css';

// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

import NotificationServices,{NOTIF_LOGIN_STATUS_CHANGE} from '../../services/noitification-services.js';
let ns =new NotificationServices();

const clientId =
      '99221609511-mphhm1rgmbev1e2ps11ho3k9457k0gju.apps.googleusercontent.com';

function LoginHooks() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    refreshTokenSetup(res);
    ns.pushNotification(NOTIF_LOGIN_STATUS_CHANGE,res.profileObj);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login.`
    );
    ns.pushNotification(NOTIF_LOGIN_STATUS_CHANGE,res.profileObj);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <div class="btn-group" onClick={signIn}  data-dismiss="modal">
      <a class='btn btn-danger disabled'>
        <i class="fa fa-google-plus google-btn"></i></a>
      <a class='btn btn-danger' href=''> Sign in with Google</a>
    </div>
  );
}

export default LoginHooks;
