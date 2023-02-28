import { Link, Outlet, useLocation } from 'react-router-dom'

function Layout() {
  const { pathname: currentPathname } = useLocation()

  const items = [
    { title: 'Home', path: '/' },
    { title: 'Prop key value', path: '/prop-key-value' },
    { title: 'useEffect', path: '/use-effect' },
    { title: 'Update state', path: '/update-state' },
    { title: 'Multiple states', path: '/multiple-states' },
    {
      title: '** Component within components',
      path: '/component-within-components'
    },
    {
      title: '** Invoking component functions directly',
      path: '/invoking-component-functions-directly'
    },
    { title: '** Aborting fetch requests', path: '/aborting-fetch-requests' },
    { title: '** exhaustive-deps', path: '/exhaustive-deps' },
    { title: 'useMemo', path: '/use-memo' },
    { title: 'useCallback', path: '/use-callback' }
  ]

  return (
    <div>
      <nav>
        <ul>
          {items.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                style={{
                  fontWeight: item.path === currentPathname ? 'bold' : 'normal'
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  )
}

export default Layout
