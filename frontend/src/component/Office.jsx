import { useEffect, useState } from 'react'
import axios from 'axios'

function Office() {
  const [offices, setOffices] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8083/api/offices')
      .then((response) => setOffices(response.data))
      .catch(() => alert('Could not load offices'))
  }, [])

  const filteredOffices = offices.filter((office) =>
    `${office.name} ${office.officeNumber}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <div>
      <h1>Offices</h1>

      <input
        type="search"
        placeholder="Search offices..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Office name</th>
            <th>Office number</th>
          </tr>
        </thead>
        <tbody>
          {filteredOffices.map((office) => (
            <tr key={office.officeNumber}>
              <td>{office.name}</td>
              <td>{office.officeNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Office