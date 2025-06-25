'use client';

import React from 'react';

type FooterProps = {
  logoUrl: string;
  navigationLinks: { title: string; href: string; openInNewTab?: boolean }[];
  socialMediaLinks: { platform: string; url: string }[];
  copyright: string;
};

const Footer: React.FC<FooterProps> = ({
  logoUrl,
  navigationLinks,
  socialMediaLinks,
  copyright,
}) => {
  return (
    <footer className="bg-gray-800 text-white px-6 py-8 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div>
          <img src={logoUrl} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-4 flex-wrap">
          {navigationLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.openInNewTab ? '_blank' : '_self'}
              rel={link.openInNewTab ? 'noopener noreferrer' : undefined}
              className="text-gray-300 hover:text-white transition"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          {socialMediaLinks.map((media, idx) => (
            <a
              key={idx}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              {media.platform}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-6">
        {copyright}
      </div>
    </footer>
  );
};

export default Footer;
