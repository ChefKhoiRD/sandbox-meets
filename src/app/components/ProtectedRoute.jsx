// components/ProtectedRoute.jsx
import { useEffect } from 'react';
import { useRouter } from 'next/router'; // Remove this line if not using useRouter
import { account } from '@/lib/appwrite';

const ProtectedRoute = ({ children }) => {
  useEffect(() => {
    const checkAuth = async () => {
      try {
        await account.get();
      } catch (error) {
        console.error('User is not authenticated:', error);
        window.location.href = '/login'; // Redirect to login page if not authenticated
      }
    };

    checkAuth();
  }, []);

  return children;
};

export default ProtectedRoute;