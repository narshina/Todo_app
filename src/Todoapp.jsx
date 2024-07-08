import React, { useState } from 'react';

export const Todoapp = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState({ title: '', description: '', status: 'notcompleted' });
  const [index, setIndex] = useState('');
  const [toggle, setToggle] = useState(true);

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, input]);
    setInput({ title: '', description: '', status: 'notcompleted' });
  };

  const handleEdit = (id) => {
    setIndex(id);
    setToggle(false);
    setInput(data[id]);
  };

  const handleDelete = (index) => {
    setData(data.filter((item, ind) => ind !== index));
  };

  const handleEdit1 = () => {
    let newdata = [...data];
    newdata[index] = {
      ...newdata[index],
      title: input.title,
      description: input.description,
      status: input.status,
    };
    setData(newdata);
    setInput({ title: '', description: '', status: 'notcompleted' });
    setToggle(true);
  };

  return (
    <div className='w-screen h-screen bg-[#2F2F2F] flex flex-col items-center justify-center p-4'>
      <div className='bg-[#FFCB74] p-6 rounded-lg w-full max-w-md mb-8 mt-16'>
        <div className='font-bold text-2xl text-center mb-4'>TODO LIST</div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col sm:flex-row items-center'>
            <label className='w-full sm:w-28 text-BLACK font-semibold'>TITLE:</label>
            <input onChange={handleChange} value={input.title} className='text-black h-9 bg-white pl-3 w-full sm:w-72 rounded-md border' name='title' type='text' />
          </div>
          <div className='flex flex-col sm:flex-row items-center'>
            <label className='w-full sm:w-28 text-black font-semibold'>DESCRIPTION:</label>
            <input onChange={handleChange} value={input.description} className='text-black h-9 bg-white pl-3 w-full sm:w-72 rounded-md border' name='description' type='text' />
          </div>
          <div className='flex flex-col sm:flex-row items-center'>
            <label className='w-full sm:w-28 text-black font-semibold'>STATUS:</label>
            <select onChange={handleChange} value={input.status} className='text-black h-9 bg-white pl-3 w-full sm:w-72 rounded-md border' name='status'>
              <option value="completed">Completed</option>
              <option value="notcompleted">Not Completed</option>
            </select>
          </div>
          {toggle ? (
            <button onClick={handleSubmit} className='bg-white rounded-md border px-4 py-2 mt-4 font-bold'>ADD</button>
          ) : (
            <button onClick={handleEdit1} type='submit' className='bg-white rounded-md border px-4 py-2 mt-4 font-bold'>EDIT</button>
          )}
        </div>
      </div>

      {data.length > 0 && (
        <div className='w-full max-w-2xl overflow-x-auto'>
          <table className='w-full bg-white rounded-lg shadow-lg'>
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
                    <button onClick={() => handleEdit(index)} className='bg-blue-500 text-white px-2 py-1 rounded-md'>EDIT</button>
                    <button onClick={() => handleDelete(index)} className='bg-red-500 text-white px-2 py-1 rounded-md'>DELETE</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
