import Image from 'next/image';
import { useState } from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [notifications, setNotifications] = useState([]);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="/raiderbot-logo.png"
                alt="RaiderBot"
                width={40}
                height={40}
                className="h-10 w-10"
              />
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-red-600">RaiderBot</h1>
              <p className="text-sm text-gray-500">AI Logistics Assistant</p>
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <button
              type="button"
              className="flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <UserCircleIcon className="h-8 w-8" />
              <span>Account</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 