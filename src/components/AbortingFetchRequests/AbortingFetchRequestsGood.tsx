import { useEffect, useState } from 'react'
// import axios from 'axios'
// import useSWR from 'swr'
// import { useQuery } from 'react-query'

function AbortingFetchRequestsGood() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState()

  /**
   * solution 1 - new AbortController()
   */
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    fetch('https://jsonplaceholder.typicode.com/users', { signal })
      .then((response) => response.json())
      .then(setUsers)
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.error('cancelled!')
        } else {
          setError(error.toString())
        }
      })

    return () => {
      controller.abort()
    }
  }, [])

  /**
   * solution 2 - axios
   */
  // useEffect(() => {
  //   const cancelToken = axios.CancelToken.source()

  //   axios
  //     .get('https://jsonplaceholder.typicode.com/users', {
  //       cancelToken: cancelToken.token
  //     })
  //     .then((res) => setUsers(res.data))
  //     .catch((error) => {
  //       if (axios.isCancel(error)) {
  //         console.log('cancelled!')
  //       } else {
  //         setError(error.toString())
  //       }
  //     })

  //   return () => {
  //     cancelToken.cancel()
  //   }
  // }, [])

  /**
   * solution 3 - SWR
   */
  // async function fetcher() {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const data = await res.json()

  //   return data
  // }

  // const { data: users, error } = useSWR('users', fetcher)

  /**
   * solution 4 - react query
   */
  // const { data: users } = useQuery('repoData', () =>
  //   fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
  //     res.json()
  //   )
  // )

  return (
    <section>
      <h2 className="text-success">Aborting fetch requests (good)</h2>
      {error && <p>{error}</p>}
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </section>
  )
}

export default AbortingFetchRequestsGood
