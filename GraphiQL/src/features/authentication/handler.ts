import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from './firebase';
import { useCallback } from 'react';

export const useHandler = () => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    signInWithEmailAndPassword(auth, 'email', 'password')
      .then(() => {
        alert('Signed-in E-mail -> Welcome!');
        navigate('/');
      })
      .catch((error) => alert(error));
  }, [navigate]);

  return handleClick;
};

export const handleSignInWithGoogle = () => {
  signInWithGoogle()
    .then(() => {
      alert('Signed-in Google -> Welcome!');
      const navigate = useNavigate();
      navigate('/');
    })
    .catch((error) => alert(error));
};
