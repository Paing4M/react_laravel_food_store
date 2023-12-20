import { RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import { router } from './routes/publicRoute'

function App() {
	return <RouterProvider router={router} />
}

export default App
