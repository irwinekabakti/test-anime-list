import React from "react";
import Link from "next/link";

const Card: React.FC = () => {
  return (
    <div className="card">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8 mx-4 lg:mx-8 gap-4">
        <div className="col-span-1 md:col-span-1 mb-6 md:mb-0">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h5 className="text-xl font-semibold mb-2">
                Special title treatment
              </h5>
              <p className="text-gray-700 mb-4">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded inline-block">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-1">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h5 className="text-xl font-semibold mb-2">
                Special title treatment
              </h5>
              <p className="text-gray-700 mb-4">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded inline-block">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-1">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h5 className="text-xl font-semibold mb-2">
                Special title treatment
              </h5>
              <p className="text-gray-700 mb-4">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded inline-block">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-1">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h5 className="text-xl font-semibold mb-2">
                Special title treatment
              </h5>
              <p className="text-gray-700 mb-4">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded inline-block">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-1">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h5 className="text-xl font-semibold mb-2">
                Special title treatment
              </h5>
              <p className="text-gray-700 mb-4">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded inline-block">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-1">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h5 className="text-xl font-semibold mb-2">
                Special title treatment
              </h5>
              <p className="text-gray-700 mb-4">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link
                href="#"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded inline-block">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
