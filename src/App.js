import React from 'react';
import { useQuery } from 'graphql-hooks';
import image from './img/8B.png';

import Row from './components/Row';

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allProfesors(first: $limit) {
    name
    class
    whatsapp
    zoom
  }
}`;

function App() {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      limit: 10,
    },
  });

  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';

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
              {data.allProfesors.map((item, key) => (
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
