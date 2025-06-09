import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [response, setResponse] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
      setResponse(response);
    }
    fetchData();
  }, [response]);

  return (
    <div className="App">
      <header className="bg-black text-white text-center py-4 mb-6">
      <p className="text-2xl font-bold text-white text-center my-4">Contact List</p>
      </header>
          <table className="border-2 border-black justify-center align-middle p-4 mx-auto w-1/2 text-center">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
            {response ? (
        response && response.map((item) => (
            <tr>
              <td className="text-center mx-2 border-2 border-black">{item.name}</td>
              <td className="text-center mx-2 border-2 border-black">{item.email}</td>
              <td className="text-center mx-2 border-2 border-black">{item.phone}</td>
            </tr>
          ))
      ) : (
        <p>Loading...</p>
      )}
      </table>
    </div>
  );
}

export default App;
