// pages/dashboard.js
import ProtectedRoute from '../components/ProtectedRoute';

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to your dashboard!</p>
      </div>
    </ProtectedRoute>
  );
}