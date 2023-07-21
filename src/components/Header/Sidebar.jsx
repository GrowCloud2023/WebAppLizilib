import { forwardRef } from "react";
import { AiFillCreditCard } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const SideBar = forwardRef(({ showNav }, ref) => {
  const location = useLocation();

  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  return (
    <div ref={ref} className="fixed w-56 lg:w-64 h-full shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <Link to="/">
          <h1 className="text-4xl font-bold text-primary">LIZILIB</h1>
        </Link>
      </div>
      <div className="bg-tertiary h-full my-[-40px]">
        <div className="flex flex-col w-56 lg:w-64">
          <Link to="/dashboard">
            <div
              className={`pl-6 py-3 mx-5 mt-10 rounded text-center cursor-pointer mb-3 flex items-center transition-all duration-500 ${
                activeRoute("/dashboard")
                  ? "bg-green-100 text-primary"
                  : "text-gray-400 hover:bg-green-100 hover:text-primary"
              }`}
            >
              <div className="mr-2">
                <BiSolidUser className="h-5 w-5" />
              </div>
              <div>
                <p>Licitaciones</p>
              </div>
            </div>
          </Link>
          <Link to="/competidores">
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-all duration-500 ${
                activeRoute("/competidores")
                  ? "bg-green-100 text-primary"
                  : "text-gray-400 hover:bg-green-100 hover:text-primary"
              }`}
            >
              <div className="mr-2">
                <BiSolidUser className="h-5 w-5" />
              </div>
              <div>
                <p>Competidores</p>
              </div>
            </div>
          </Link>
          <Link to="/instituciones">
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-all duration-500 ${
                activeRoute("/instituciones")
                  ? "bg-green-100 text-primary"
                  : "text-gray-400 hover:bg-green-100 hover:text-primary"
              }`}
            >
              <div className="mr-2">
                <AiFillCreditCard className="h-5 w-5" />
              </div>
              <div>
                <p>Instituciones</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="pl-6 py-3 mx-5 rounded text-center mb-3 flex-col mt-[100%] transition-all duration-500">
          <button className="text-white bg-primary focus:ring-4 focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 hover:bg-green-600 transition-all duration-500">
            ¡Danos tú opinión!
          </button>
        </div>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
