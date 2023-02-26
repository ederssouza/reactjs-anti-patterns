/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import useSWR from 'swr'

type User = {
  id: number
  name: string
}

function ExhaustiveDepsGood() {
  // const [users, setUsers] = useState<User[]>()
  // const [error, setError] = useState<string | null>()
  // const env = useRef('production')

  /**
   * solution 1 - useRef
   */
  // useEffect(() => {
  //   async function fetchUsers() {
  //     console.log('call fetchUsers...')
  //     try {
  //       const response = await fetch(
  //         'https://jsonplaceholder.typicode.com/users'
  //       )
  //       const data = await response.json()
  //       setUsers(data)
  //     } catch (err) {
  //       if (env.current !== 'production') {
  //         setError((err as string).toString())
  //       }
  //     }
  //   }

  //   fetchUsers()
  // }, [])

  /**
   * solution 2 - SWR
   */
  const [env, setEnv] = useState('production')

  async function fetcher() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return data
  }

  const { data: users, error } = useSWR<User[]>('users', fetcher)

  return (
    <section>
      <h2 className="text-success">exhaustive-deps (good)</h2>

      {/* {error && <div className="alert alert-danger">{error}</div>} */}

      {error && env !== 'production' && (
        <div className="alert alert-danger">{error}</div>
      )}

      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </section>
  )
}

export default ExhaustiveDepsGood
