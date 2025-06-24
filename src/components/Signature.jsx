import React from 'react';

export default function Signature({ name = 'Zairah' }) {
  return (
    <div className="mt-4 text-left">
      <span
        className="text-2xl text-gray-700"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        — {name}
      </span>
    </div>
  );
}
