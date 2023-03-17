import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const errors = {};
    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    setFormErrors(errors);

    // Submit form if there are no errors
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-poppins">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-12 shadow rounded-lg py-20">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Welcome Back
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                      formErrors.email
                        ? "border-red-500 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    } sm:text-sm my-4`}
                    placeholder="Email address"
                  />
                </div>
                {formErrors.email && (
                  <p className="mt-2 text-sm text-red-600" id="email-error">
                    {formErrors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaLock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                      formErrors.password
                        ? "border-red-500 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    } sm:text-sm`}
                    placeholder="Password"
                  />
                </div>
                {formErrors.password && (
                  <p className="mt-2 text-sm text-red-600" id="password-error">
                    {formErrors.password}
                  </p>
                )}
              </div>
            </div>
    
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
    
              <div className="text-sm">
                <a href="#" className="font-medium text-gray-800 hover:text-gray-700">
                  Forgot your password?
                </a>
              </div>
            </div>
    
            <div className="pt-7">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2  px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
);}    

export default LoginForm
