import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

export const Navbar = ({ handleThemeSwitch, theme }) => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log("user: ", user);
  console.log("loading: ", loading);

  // handleLogOut
  const handleLogOut = () => {
    logOut()
      .then(() => {
        user?.uid && toast.success("Logout successful");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-white dark:bg-midnight F z-10 w-full">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* logo start */}
          <NavLink to="/" aria-label="Company" title="Company" className="inline-flex items-center">
            <svg
              className="w-8 text-teal-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase text-gs dark:text-white">
              Tech-Master
            </span>
          </NavLink>
          {/* logo end */}
          {/* desktop menu start */}
          <ul className=" items-center hidden space-x-8 lg:flex">
            <button onClick={handleThemeSwitch}>
              {theme === "dark" ? (
                <span className="border bottom-1 rounded-md py-1 px-3 text-white">Dark 🌙</span>
              ) : (
                <span className="border rounded-md py-1 px-3 text-black">Light 🌞</span>
              )}
            </button>
            <li>
              <NavLink
                to="/courses"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Blogs
              </NavLink>
            </li>

            {!loading && !user?.uid ? (
              <>
                <li>
                  <NavLink
                    to="/login"
                    aria-label="About us"
                    title="About us"
                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <button
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-black text-white dark:bg-gradient-to-r from-gs to-ge dark:text-white"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    <Link to="/signup">Sign up</Link>
                  </button>
                </li>
              </>
            ) : (
              <>
                <li onClick={handleLogOut} className="cursor-pointer">
                  LogOut
                </li>
                {/* avatar */}
                <li className="avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                  <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src={
                        user?.photoURL
                          ? user.photoURL
                          : "https://www.pngfind.com/pngs/m/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png"
                      }
                      alt=""
                    />
                  </div>
                </li>
              </>
            )}
          </ul>
          {/* desktop menu end */}

          {/* mobile menu start */}
          <div className="lg:hidden">
            <div className="flex justify-between items-center">
              <button onClick={handleThemeSwitch}>{theme === "dark" ? "🌙" : "🌞"}</button>

              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
                  <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
                  <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
                </svg>
              </button>
            </div>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white dark:bg-midnight border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <NavLink to="/" aria-label="Company" title="Company" className="inline-flex items-center">
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gs dark:text-white uppercase">
                          Tech-master
                        </span>
                      </NavLink>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {!loading && user?.uid && (
                        <li className="avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                          <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img
                              src={
                                user?.photoURL
                                  ? user.photoURL
                                  : "https://www.pngfind.com/pngs/m/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png"
                              }
                              alt=""
                            />
                          </div>
                        </li>
                      )}
                      <li>
                        <NavLink
                          to="/courses"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-darkText transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Courses
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/faq"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-darkText transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          FAQ
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blogs"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-darkText transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blogs
                        </NavLink>
                      </li>
                      {!loading && !user ? (
                        <>
                          <li>
                            <NavLink
                              to="/login"
                              aria-label="About us"
                              title="About us"
                              className="font-medium tracking-wide text-darkText transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              login
                            </NavLink>
                          </li>
                          <li>
                            <button
                              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black dark:bg-gradient-to-r from-gs to-ge dark:text-white hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                              aria-label="Sign up"
                              title="Sign up"
                            >
                              <Link to="/signup">Sign Up</Link>
                            </button>
                          </li>
                        </>
                      ) : (
                        <li onClick={handleLogOut} className="cursor-pointer">
                          LogOut
                        </li>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
          {/* mobile menu end */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
