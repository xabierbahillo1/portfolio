import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="opacity-80 md:pl-0 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl flex justify-center">
      <div className="rounded-lg w-full max-w-screen-xl mx-auto py-4">
        <div className="flex justify-between items-center">
          <span className="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">
            © {currentYear}{' '}
            <a href="https://github.com/xabierbahillo1/" className="hover:underline">
              Xabier Bahillo
            </a>
          </span>
          <ul className="flex items-center">
            <li>
              <a
                id="contacto"
                href="mailto:xabierbahillo1@gmail.com"
                className="hover:underline text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
