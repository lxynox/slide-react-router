export const staticRoutes =  `export default [
  { path: '/', component: () => <Home /> },
  { path: '/task', component: () => <Task/> },
  { path: '/tasks/:id', component: () => <TaskItem /> }
]`

export const dynamicRoutes = `export default (myProps) => {
  return (
    <React.Fragment>
      <Route path='/' render={routeProps => <Home {...routeProps, ...myProps} />} />
      <Route path='/task' render={routeProps =><Task {...routeProps, ...myProps}/>} />
      <Route path='/tasks/:id' render={routeProps => <TaskItem {...routeProps, ...myProps}/>} />
    </React.Fragment>
  )
}`
