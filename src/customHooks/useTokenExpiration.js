import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../Store/AuthSlice';
import { useJwt } from 'react-jwt';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const useTokenExpiration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const token = Cookies.get("accessToken");
  const { decodedToken, isExpired } = useJwt(token);

  useEffect(() => {
    if (isExpired && decodedToken) {
      toast.error("Your session is expired, please re-login!");
      dispatch(signOut());
      setTimeout(() => {
        navigate("/signIn");
      }, 2000);
    }
  }, [decodedToken, isExpired, navigate, dispatch,token]);
};

export default useTokenExpiration;