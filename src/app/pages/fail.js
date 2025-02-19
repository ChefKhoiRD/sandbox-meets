export default function Fail() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Login Failed</h1>
      <p className="text-lg text-red-500 mb-4">There was an error during the login process. Please try again.</p>
      <a href="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
        Go Back to Home
      </a>
    </div>
  );
}