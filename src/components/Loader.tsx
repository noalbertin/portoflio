// components/Loader.tsx
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <img src="/logo.png" alt="Logo" className="w-50 h-50 animate-bounce mb-4" />
    </div>
  );
};

export default Loader;
