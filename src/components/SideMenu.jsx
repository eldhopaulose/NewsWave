import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const SideMenu = () => {
  // Define a state variable to track the menu's open/close state
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <svg
        className={`${isOpen ? "hidden" : "visible"
          } mt-3 ml-3w-12 h-12 cursor-pointer`}
        onClick={toggleMenu}
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 30 30"
      >
        <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
      </svg>

      <ul
        className={`${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 border w-52 h-screen  fixed top-0 left-0 transform ease-in-out shadow-lg bg-white`}
      >
        <li className="flex justify-end mt-5">
          <svg
            className="w-10 h-10  cursor-pointer"
            onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 24 24"
          >
            <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
          </svg>
        </li>
        <li className="border-b p-5 flex justify-center mt-20"><Link to="/">Home</Link></li>
        <li className="border-b p-5 flex justify-center">
          <Link to="/createnews">Add New</Link></li>
        <li className="border-b p-5 flex justify-center">Blog</li>
      </ul>
      <Outlet />
    </div>
  );
};

export default SideMenu;
