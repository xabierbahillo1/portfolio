import React from 'react';

const SectionTitle = ({ className, children }) => {
  return (
    <h2 className={`flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;