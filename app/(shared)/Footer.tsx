import React from "react";

const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="w-full h-20 bg-gray-200">
      <div className="flex justify-center items-center h-full px-3">
        <p className="text-gray-600 text-sm">
          © {year} Irwin Ekabakti. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
