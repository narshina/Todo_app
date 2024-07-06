import React, { useState } from 'react';

export const Todoapp = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({ title: '', description: '', status: 'notcompleted' });

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, input]);
    setInput({ title: '', description: '', status: 'notcompleted' });
  };

  return (
    <div className='w-screen h-screen bg-orange-400 flex flex-col items-center justify-center p-4'>
      <form onSubmit={handleSubmit}>
        <div className='bg-slate-400 p-6 rounded-lg w-[450px] mb-8'>
          <div className='font-bold text-2xl text-center mb-4'>TODO LIST</div>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center'>
              <label className='w-28 text-white font-semibold'>TITLE:</label>
              <input
                onChange={handleChange}
                value={input.title}
                className='text-black h-9 bg-white pl-3 w-72 rounded-md border'
                name='title'
                type='text'
              />
            </div>
            <div className='flex items-center'>
              <label className='w-28 text-white font-semibold'>DESCRIPTION:</label>
              <input
                onChange={handleChange}
                value={input.description}
                className='text-black h-9 bg-white pl-3 w-72 rounded-md border'
                name='description'
                type='text'
              />
            </div>
            <div className='flex items-center'>
              <label className='w-28 text-white font-semibold'>STATUS:</label>
              <select
                onChange={handleChange}
                value={input.status}
                className='text-black h-9 bg-white pl-3 w-72 rounded-md border'
                name='status'
              >
                <option value="completed">Completed</option>
                <option value="notcompleted">Not Completed</option>
              </select>
            </div>
            <button type='submit' className='bg-white rounded-md border px-4 py-2 mt-4'>ADD</button>
          </div>
        </div>
      </form>

      <table className='w-[600px] bg-white rounded-lg shadow-lg'>
        <thead className='bg-slate-400 text-white'>
          <tr>
            <th className='p-3'>TITLE</th>
            <th className='p-3'>DESCRIPTION</th>
            <th className='p-3'>STATUS</th>
            <th className='p-3'>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className='text-center'>
              <td className='p-3'>{item.title}</td>
              <td className='p-3'>{item.description}</td>
              <td className='p-3'>{item.status}</td>
              <td className='p-3 flex justify-center gap-4'>
                <button className='bg-blue-500 text-white px-2 py-1 rounded-md'>EDIT</button>
                <button className='bg-red-500 text-white px-2 py-1 rounded-md'>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
