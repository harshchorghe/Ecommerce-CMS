'use client';

import React from 'react';

type HeaderProps = {
  logoUrl: string;
  navigationMenu: {
    label: string;
    href: string;
    openInNewTab?: boolean;
  }[];
  showAnnouncement: boolean;
  announcementText: string;
};

const Header: React.FC<HeaderProps> = ({
  logoUrl,
  navigationMenu,
  showAnnouncement,
  announcementText,
}) => {
  return (
    <header className="w-full bg-white shadow-md">
      {/* Notification Bar */}
      {showAnnouncement && announcementText && (
        <div className="bg-yellow-100 text-black text-center py-2 text-sm font-medium">
          {announcementText}
        </div>
      )}

      {/* Main Header */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logoUrl} alt="Site Logo" className="h-10 w-auto" />
        </div>

        {/* Navigation */}
        <nav className="flex gap-6">
          {navigationMenu.map((item, idx) => (
            <a
              key={idx}
              href={item.href || '#'}
              target={item.openInNewTab ? '_blank' : '_self'}
              rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              {item.label || 'Link'}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
