import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
            <h1 className="text-3xl font-bold text-center text-slate-800">
              React Context Demo
            </h1>

            <p className="text-center text-slate-500 mt-2 mb-8">
              Login and see Context API in action
            </p>

            <Login />

            <div className="my-6 border-t border-slate-200"></div>

            <Profile />
          </div>
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;