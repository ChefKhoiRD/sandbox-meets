import { useEffect } from 'react';
import { account } from '@/lib/appwrite';

const ProtectedRoute = ({ children }) => {
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await account.get();
      } catch (error) {
        console.error('User is not authenticated:', error);
        window.location.href = '/login';
      }
    };

    checkAuth();
  }, []);

  return children;
};

export default ProtectedRoute;