import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import routes from "./routes/routes"
import store from "./redux/store"

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes}/>
      <ToastContainer />
    </Provider>
  )
}

export default App
