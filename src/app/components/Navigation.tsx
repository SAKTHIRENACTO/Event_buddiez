import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/Logo.png";
import { authAPI } from "../../api/auth.api";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await authAPI.getUser();
        setUser(data);
      } catch (error) {
        console.error("User fetch failed", error);
      }
    };

    fetchUser();
  }, []);

  // ADMIN CHECK
  const isAdmin =
    user?.id === "cd97a9cf-d071-429f-88f8-77d5bd3ffeaa";

  // PUBLIC NAVIGATION
  const publicNavLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  // ADMIN NAVIGATION
  const adminNavLinks = [
    { to: "/admin", label: "Dashboard" },
    { to: "/admin/events", label: "Events" },
    { to: "/admin/vendors", label: "Vendors" },
    { to: "/admin/reports", label: "Reports" },
    { to: "/admin/content", label: "Content" },
  ];

  const navLinks =  publicNavLinks;
  // const navLinks = isAdmin ? adminNavLinks : publicNavLinks;

  const isActive = (path: string) => location.pathname === path;

  const handleLogoClick = () => {
    // navigate(`/`);
    navigate(`/login?isLoggedin=${isAdmin}`);
  };

  return (
    <nav className="bg-gradient-to-r from-[#8B0000] to-[#6B0000] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <div className="flex items-center gap-2">

            <div
              className="w-16 h-16 flex items-center justify-center cursor-pointer"
              onClick={handleLogoClick}
            >
              <img
                src={logo}
                alt="Event Buddiez Logo"
                className="w-14 h-14 object-contain"
              />
            </div>

            <Link to="/" className="flex flex-col">
              <span className="text-xl font-bold tracking-wide">
                Event Buddiez
              </span>
              <span className="text-xs text-[#D4AF37]">
                Your celebration partner
              </span>
            </Link>

          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 border-b-2 transition-all ${
                  isActive(link.to)
                    ? "border-[#D4AF37] text-[#D4AF37]"
                    : "border-transparent hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
            )}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#6B0000]">
          <div className="px-4 py-4 space-y-3">

            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 rounded-md ${
                  isActive(link.to)
                    ? "bg-[#D4AF37] text-[#8B0000]"
                    : "hover:bg-[#A00000]"
                }`}
              >
                {link.label}
              </Link>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
}

