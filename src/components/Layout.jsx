import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../contexts/AuthContext';

const Layout = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-secondary">
      <nav className="bg-primary text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/bahria-logo.png"
                alt="BU Logo"
                className="h-10 w-10 brightness-0 invert"
              />
              <span className="text-2xl font-bold text-white">ABSHMT</span>
            </Link>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <Link to="/" className="text-white hover:text-secondary-dark font-medium">
                  Home
                </Link>
                {user && (
                  <Link to="/orders" className="text-white hover:text-secondary-dark font-medium">
                    Orders
                  </Link>
                )}
                <Link to="/about" className="text-white hover:text-secondary-dark font-medium">
                  About Us
                </Link>
              </div>
              {user ? (
                <>
                  <Link
                    to="/checkout"
                    className="p-2 text-white hover:text-secondary-dark rounded-full hover:bg-primary-light"
                  >
                    <ShoppingCartIcon className="h-6 w-6" />
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="text-white hover:text-secondary-dark font-medium"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/login"
                    className="text-white hover:text-secondary-dark font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-white text-primary px-4 py-2 rounded-lg hover:bg-secondary-dark transition-colors font-medium"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <main className="dots-overlay">
        <Outlet />
      </main>

      <footer className="bg-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500"> 2024 AI Based Smart Hybrid Machine Technology. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
