import React from 'react';
import RowComponent from './RowComponent';

const TableComponent = ({ data }) => {
    // Object.keys(data).forEach(function(key, index) {
    //     console.log(data[key])
    //         });
  return (
    <div className="overflow-x-auto">
    <table className="min-w-full bg-purple-950 text-left text-sm">
      <thead className="bg-purple-800 text-purple-300">
        <tr>
          <th className='bg-indigo-900 text-indigo-300 border-b border-indigo-700 p-4'>Name</th>
          <th className='bg-indigo-900 text-indigo-300 border-b border-indigo-700 p-4'>Full Degree</th>
          <th className='bg-indigo-900 text-indigo-300 border-b border-indigo-700 p-4'>Norm Degree</th>
          <th className='bg-indigo-900 text-indigo-300 border-b border-indigo-700 p-4'>Is Retro</th>
          <th className='bg-indigo-900 text-indigo-300 border-b border-indigo-700 p-4'>Current Sign</th>
        </tr>
      </thead>
      <tbody>
        {/* {data.map((row, index) => (
          <RowComponent key={index} row={row} />
        ))} */}
         {/* Object.keys(data).forEach(function(keyy, index) {
  <RowComponent key={data[keyy].normDegree} row={data[keyy]} />
      }); */}
        {Object.keys(data).map(key => (
          <RowComponent key={data[key].normDegree} row={data[key]} />
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default TableComponent;
