import ThemeButton from "./ThemeButton";

const Navbar = () => {
  const logOut = async () => {
    await fetch("http://localhost:8080/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    window.location.href = "/enter-email";
  };
  return (
    <div
      id="navbar"
      className="w-[70%] flex flex-row items-center justify-between p-5 border-2 border-blue-400 rounded-sm text-white"
    >
      <ThemeButton />
      <button
        onClick={logOut}
        className="pl-3 p-1 text-xs rounded-sm border-2 border-red-400 bg-red-900 text-red-200 font-extrabold tracking-[8px] hover:text-red-900 hover:bg-red-200 duration-300"
      >
        {" "}
        LOG OUT
      </button>
    </div>
  );
};

export default Navbar;