// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import StudentList from './components/StudentList'
// import StudentDetail, { studentLoader } from './components/StudentDetail'
// import StudentForm from './components/StudentForm'
// import './App.css'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: (
//       <div className="app-container min-h-screen bg-gray-100">
//         <header className="header">
//           <h1>Student Management Portal</h1>
//           <p>Manage student information efficiently</p>
//         </header>
//         <main className="content">
//           <StudentList />
//         </main>
//       </div>
//     ),
//   },
//   {
//     path: '/student/:id',
//     element: <StudentDetail />,
//     loader: studentLoader, // 👈 now properly attached
//   },
//   {
//     path: '/add',
//     element: <StudentForm />,
//   },
//   {
//     path: '/edit/:id',
//     element: <StudentForm />,
//   },
// ])

// function App() {
//   return <RouterProvider router={router} /> // 👈 must use RouterProvider
// }

// export default App
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import StudentList from './components/StudentList'
import StudentDetail, { studentLoader } from './components/StudentDetail'
import StudentForm from './components/StudentForm'

// Layout Component that wraps all pages
function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Animated background overlay */}
      <div className="fixed inset-0 bg-black opacity-10"></div>
      
      {/* Floating background decorations */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      
      {/* Main container */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <header className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl mb-8 overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 text-white relative">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div>
            
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 animate-pulse animation-delay-200"></div>
            <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-white/5 rounded-full animate-ping"></div>
            
            {/* Header content */}
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mr-4 transform rotate-3 hover:rotate-6 transition-transform">
                  <span className="text-3xl">🎓</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-slide-down">
                  Student Management Portal
                </h1>
              </div>
              <p className="text-lg md:text-xl text-center opacity-95 animate-slide-up animation-delay-200">
                Manage student information efficiently and effectively
              </p>
              
              {/* Animated dots */}
              <div className="flex justify-center gap-2 mt-4">
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce animation-delay-200"></div>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce animation-delay-400"></div>
              </div>
            </div>
          </div>
          
          {/* Bottom gradient bar */}
          <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        </header>
        
        {/* Content */}
        <main className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-8 lg:p-10 animate-fade-in min-h-[500px]">
          <Outlet /> {/* This is where child routes will render */}
        </main>
        
        {/* Footer */}
        <footer className="mt-8 text-center text-white/80 animate-fade-in animation-delay-400">
          <p className="text-sm">© 2024 Student Management System. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

// Create router with proper layout structure
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Layout wraps all routes
    children: [
      {
        index: true, // This is the default route for "/"
        element: <StudentList />,
      },
      {
        path: 'student/:id',
        element: <StudentDetail />,
        loader: studentLoader,
      },
      {
        path: 'add',
        element: <StudentForm />,
      },
      {
        path: 'edit/:id',
        element: <StudentForm />,
      },
    ],
    errorElement: <ErrorPage />, // Optional: Add error boundary
  },
])

// Optional: Error Page Component
function ErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-md w-full text-center animate-scale-in">
        <div className="text-6xl mb-4">😕</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
        <p className="text-gray-600 mb-6">The page you're looking for doesn't exist or has been moved.</p>
        <a 
          href="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
        >
          Go Back Home
        </a>
      </div>
    </div>
  )
}

function App() {
  return <RouterProvider router={router} />
}

export default App