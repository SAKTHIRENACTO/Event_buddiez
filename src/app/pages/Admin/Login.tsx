import { useContext, useState } from "react";
import { authAPI } from "../../../api/auth.api";
import { Eye, EyeOff, Loader2, Mail, Lock } from "lucide-react";
import logo from "../../../assets/Logo.png";
import { theme } from "../../../styles/theme";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate, useSearchParams } from "react-router";

export default function Login() {
  const auth = useContext(AuthContext);
  const [searchParams] = useSearchParams();

  const isLoggedin = searchParams.get("isLoggedin") === "true";
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
    try {
      setLoading(true);
      const user = await authAPI.login(email, password);
      navigate("/");
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      const loginData = await authAPI.logout();
      navigate('/')
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="min-h-screen flex">
      <div
        className="hidden md:flex w-1/2 items-center justify-center"
        style={{ background: theme.gradients.primaryGradient }}
      >
        <div className="text-center p-10">
          <img
            src={logo}
            alt="Event Buddiez"
            className="w-80 mx-auto mb-6 rounded-xl "
          />
          <h2 className="text-3xl text-white mb-3">
            Welcome to Event Buddiez
          </h2>
          <p className="text-gray-200 max-w-md mx-auto">
            Manage bookings, vendors, and events seamlessly from your
            professional dashboard.
          </p>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-gray-50 px-6">
        <div
          className="w-full max-w-md p-8 rounded-2xl "
        >
          <div className="text-center mb-8">
            <h1
              className="text-3xl mb-2"
              style={{ color: theme.colors.primary }}
            >
              EVENT BUDDIEZ
            </h1>
            {isLoggedin ? (<p className="text-sm text-gray-500">Admin Logout</p>) :
              (<p className="text-sm text-gray-500">Admin login</p>)}
          </div>
          {error && (
            <div className="bg-red-100 text-red-600 text-sm p-3 rounded mb-4">
              {error}
            </div>
          )}
          {isLoggedin ? (
            <button
              onClick={handleLogout}
              disabled={loading}
              className="w-full py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition"
              style={{
                backgroundColor: theme.colors.primary,
                color: theme.colors.accent,
              }}
            >
              {loading && <Loader2 className="animate-spin w-4 h-4" />}
              {loading ? "Logging out..." : "Logout"}
            </button>
          ) : (
            <>
              <div className="mb-5">
                <label className="text-sm  mb-2 block">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-500 rounded-lg pl-10 pr-3 py-2 focus:outline-none "
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="text-sm  mb-2 block">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-500 rounded-lg pl-10 pr-10 py-2 focus:outline-none "
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition"
                style={{
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.accent,
                }}
              >
                {loading && <Loader2 className="animate-spin w-4 h-4" />}
                {loading ? "Logging in..." : "Login"}
              </button></>
          )}

          <p className="text-center text-xs text-gray-300 mt-6">
            © {new Date().getFullYear()} Event Buddiez
          </p>
        </div>
      </div>
    </div>
  );
}