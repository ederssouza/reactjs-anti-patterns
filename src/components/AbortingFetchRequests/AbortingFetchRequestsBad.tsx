import { useEffect, useState } from 'react'

function AbortingFetchRequestsBad() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(setUsers)
      .catch((error) => console.error(error))
  }, [])

  return (
    <section>
      <h2 className="text-danger">Aborting fetch requests (bad)</h2>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </section>
  )
}

export default AbortingFetchRequestsBad
