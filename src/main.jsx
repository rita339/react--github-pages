import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import Child1 from './components/Child1.jsx'
import Child2 from './components/Child2.jsx'
import Child3 from './components/Child3.jsx'
import Home from './components/Home.jsx'
import Error404 from './components/Error404.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    // Wenn (nach "/") ein ungültiger Pfad angegeben wird, dann wird das errorElement angezeigt (statt App)
    // errorElement: <Error404 />,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "child1",
        element: <Child1 />
      },
      {
        path: "child2",
        element: <Child2 />
      },
      {
        path: "child3",
        element: <Child3 />
      },
    ]
  },
  // path: "*" kann man hier als "alle anderen (ungültigen/nicht definierten) Pfaden" verstehen
  {
    path: "*",
    /* 
    Ich gehe zuerst auf einen ungültigen Pfad "/anton", dann werde ich zu "/" weitergeleitet
    ohne replace: Beide Schritte/Stationen werden im Browserverlauf gespeichert
    mit replace: Der Schritt "/anton" wird nicht gespeichert, sondern durch den weitergeleiteten Schritt "/" ersetzt
    */
    element: <Navigate to="/" replace />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

/* 
// Eine alternative Schreibweise für den Router ab react-router-dom v. 6.4, die ihr wahrscheinlich in Tutorials mehr sehen werdet.
import {createRoutesFromElements, Route} from 'react-router-dom';
const router2 = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />}/>
      <Route path="child1" element={<Child1 />}/>
      <Route path="child2" element={<Child2 />}/>
      <Route path="child3" element={<Child3 />}/>
    </Route>
  )
);
 */