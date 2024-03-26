import Logo from "../../assets/images/logo.png";
import location from "../../assets/images/location.png";
import phone from "../../assets/images/phone.png";
import SubHeader from "../subHeader";
import { Divider } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [hide, setHide] = useState(true);

  const navigate = useNavigate();

  return (
    <div className="w-full fixed top-0 z-10">
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-16 w-auto" src={Logo} alt="logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setHide(false)}
              data-cy="open"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6 text-[rgb(55 47 53)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a
                  href="/"
                  className="text-sm flex items-center leading-6 text-[rgb(55 47 53)] mr-5"
                >
                  <img
                    src={location}
                    alt="location"
                    className="mr-1"
                    style={{ width: 16 }}
                  />{" "}
                  Ahmedabad (Headquarters)
                </a>
                <a
                  href="/"
                  className="text-sm flex items-center leading-6 text-[rgb(55 47 53)]"
                >
                  <img
                    src={phone}
                    alt="phone"
                    className="mr-1"
                    style={{ width: 16 }}
                  />{" "}
                  +91 97268 82080
                </a>
              </div>
              <Divider className="mt-4 mb-4" />
              <SubHeader />
            </div>
          </div>
        </nav>
        <div
          className={`lg:hidden ${hide ? "hidden" : ""}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-10 w-auto" src={Logo} alt="logo" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setHide(true)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 uppercase">
                  <div
                    className="-mx-3 cursor-pointer block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => {
                      navigate(`/`);
                    }}
                  >
                    Home
                  </div>
                  <div
                    className="-mx-3 cursor-pointer block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => {
                      navigate(`/about`);
                    }}
                  >
                    About
                  </div>
                  <div
                    className="-mx-3 cursor-pointer block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => {
                      navigate(`/services`);
                    }}
                  >
                    Services
                  </div>
                  <div
                    className="-mx-3 cursor-pointer block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => {
                      navigate(`/project`);
                    }}
                  >
                    Project
                  </div>
                  <div
                    className="-mx-3 cursor-pointer block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => {
                      navigate(`/contact`);
                    }}
                  >
                    Contact US
                  </div>
                </div>
                <div className="py-6">
                  <a
                    href="/"
                    className="-mx-3 flex items-center rounded-lg px-3 py-2.5 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    data-cy="login"
                  >
                    <img
                      src={location}
                      alt="location"
                      className="mr-1"
                      style={{ width: 16 }}
                    />{" "}
                    Ahmedabad (Headquarters)
                  </a>
                  <a
                    href="/"
                    className="-mx-3 flex items-center rounded-lg px-3 py-2.5 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    data-cy="login"
                  >
                    <img
                      src={phone}
                      alt="phone"
                      className="mr-1"
                      style={{ width: 16 }}
                    />{" "}
                    +91 97268 82080
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <div
        className={`p-4 text-center text-white bg-white ${
          screenWidth <= 1023 && "hidden"
        }`}
      >
        <SubHeader />
      </div> */}
    </div>
  );
};

export default Header;
