import React, { useState, useEffect } from 'react';
import axios from 'axios';
import image from './img/8B.png';

import Row from './components/Row';

const gistURL =
  'https://gist.githubusercontent.com/emamut/86b0b780d790fab63a9138baa313a496/raw/ed25d10c9fd5acb4047820e713101015b2b03c50/directorio-pu.json';

function App() {
  const [responseData, setResponseData] = useState([{}]);

  useEffect(() => {
    axios.get(gistURL).then((response) => setResponseData(response.data));
  }, [setResponseData, responseData]);

  return (
    <div className="container mx-auto">
      <div className="flex mt-5">
        <div className="w-full">
          <h1 className="text-center text-5xl">Directorio 8B</h1>
        </div>
      </div>
      <div className="flex mt-3">
        <div className="flex-1 w-full">
          <img src={image} alt="" className="w-100 mx-auto" />
        </div>
      </div>
      <div className="flex mt-3">
        <div className="w-full">
          <table className="table-auto mx-auto">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="border px-4 py-2">Profesor</th>
                <th className="border px-4 py-2">Materia</th>
                <th className="border px-4 py-2">Zoom</th>
                <th className="border px-4 py-2">Whatsapp</th>
              </tr>
            </thead>
            <tbody>
              {responseData.map((item, key) => (
                <Row key={key} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
