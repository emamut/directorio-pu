import React from 'react';

// https://gist.githubusercontent.com/emamut/86b0b780d790fab63a9138baa313a496/raw/ed25d10c9fd5acb4047820e713101015b2b03c50/directorio-pu.json

function App() {
  return (
    <div className="container mx-auto">
      <div className="flex mt-5">
        <div className="w-full">
          <h1 className="text-center text-5xl">Directorio 8B</h1>
        </div>
      </div>
      <div className="flex mt-3">
        <div className="w-full">
          <table className="table-auto mx-auto">
            <thead>
              <tr>
                <th className="border px-4 py-2">Profesor</th>
                <th className="border px-4 py-2">Materia</th>
                <th className="border px-4 py-2">Link a Zoom</th>
                <th className="border px-4 py-2">Link a Whatsapp</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
