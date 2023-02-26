/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react'

type User = {
  id: number
  name: string
}

function ExhaustiveDepsBad() {
  const [users, setUsers] = useState<User[]>()
  const [error, setError] = useState<string | null>()
  const [env, setEnv] = useState('production')

  useEffect(() => {
    async function fetchUsers() {
      console.log('fetchUsers...')

      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        )
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        if (env !== 'production') {
          setError((err as string).toString())
        }
      }
    }

    fetchUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section>
      <h2 className="text-danger">exhaustive-deps (bad)</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </section>
  )
}

export default ExhaustiveDepsBad
