// components/LogoutButton.jsx
import { useState, useEffect } from 'react';
import { account } from '@/lib/appwrite';

export default function LogoutButton() {
  const [showModal, setShowModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      window.location.href = '/'; // Redirect to the home page
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const toggleModal = () => {
    if (showModal) {
      setShowModal(false);
      setTimeout(() => setModalVisible(false), 300); // Match the duration of the transition
    } else {
      setModalVisible(true);
      setTimeout(() => setShowModal(true), 10); // Slight delay to trigger transition
    }
  };.47

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-neutral-900 border border-neutral-600 text-white py-2 px-4 rounded hover:bg-neutral-800 transition-colors"
      >
        Logout
      </button>
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${showModal ? 'opacity-50' : 'opacity-0'}`}
            onClick={toggleModal}
          ></div>
          <div
            className={`bg-neutral-900 rounded-lg shadow-lg p-6 z-50 max-w-sm w-full mx-4 transition-transform transition-opacity duration-300 ease-in-out transform ${
              showModal ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <h2 className="text-lg font-semibold text-white mb-4">Confirm Logout</h2>
            <p className="text-neutral-300 mb-4">Are you sure you want to log out?</p>
            <div className="flex justify-end">
              <button
                onClick={toggleModal}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}