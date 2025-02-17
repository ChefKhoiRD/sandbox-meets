// components/LoginButton.jsx
import { useEffect, useState } from 'react';
import { account } from '@/lib/appwrite';

export default function LoginButton() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogin = async () => {
    try {
      await account.createOAuth2Session(
        'google',
        `${window.location.origin}/`,
        `${window.location.origin}/fail`
      );
    } catch (error) {
      console.error('An error occurred during OAuth2 session creation:', error);
      window.location.href = '/fail'; // Redirect to the fail page on error
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <button
      onClick={handleLogin}
      className="bg-neutral-900 border border-neutral-600 text-white py-2 px-4 rounded hover:bg-neutral-800 transition-colors"
    >
      <span className="block sm:hidden">Log in</span>
      <span className="hidden sm:block">Login with Google</span>
    </button>
  );
}