import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/config';
import { signOut } from 'firebase/auth';

const SignOut = ({ className = '', isMobile = false }) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Clear user data from localStorage
      localStorage.removeItem('userName');
      localStorage.removeItem('userType');
      localStorage.removeItem('userId');
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className={`${
        isMobile
          ? 'block w-full rounded-lg bg-gradient-to-r from-red-600 to-red-500 px-4 py-3 text-center text-base font-medium text-white shadow-md hover:from-red-700 hover:to-red-600 transition-all transform hover:scale-[1.02]'
          : 'text-sm font-semibold leading-6 text-gray-900 hover:text-red-600 transition-colors px-3 py-1 rounded-md border border-green-200/50 hover:border-green-300/70 hover:bg-green-50/30'
      } ${className}`}
    >
      Sign out {!isMobile && <span aria-hidden="true">&rarr;</span>}
    </button>
  );
};

export default SignOut; 