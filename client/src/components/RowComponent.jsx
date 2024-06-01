import React from 'react';

const RowComponent = ({ row }) => {
  return (
    <tr className="bg-purple-900 odd:bg-purple-800 text-white">
      <td className="border-b border-purple-700 p-4">{row.name}</td>
      <td className="border-b border-purple-700 p-4">{Math.round(row.fullDegree * 10000) / 10000}</td>
      <td className="border-b border-purple-700 p-4">{Math.round(row.normDegree * 10000) / 10000}</td>
      <td className="border-b border-purple-700 p-4">{row.isRetro}</td>
      <td className="border-b border-purple-700 p-4">{row.current_sign}</td>
    </tr>
  );
};

export default RowComponent;
