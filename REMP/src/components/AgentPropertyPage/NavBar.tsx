const NavBar = () => {
  const userName = "Jane Doe"; // Mock name, need to change after finish login,cause get name form login

  return (
    <nav className="w-full px-32 py-4 bg-white">
      <div className="text-sm text-gray-500 text-left">Hi, <span className="font-medium">{userName}</span></div>

      <div className="flex items-center justify-between mt-2">
        <h1 className="text-lg font-semibold text-gray-800">My Order</h1>
        <input
          type="text"
          placeholder="Search My Order"
          className="px-4 py-2 rounded-full text-gray-500 bg-gray-200 text-sm focus:outline-none"
        />
      </div>
    </nav>
  );
};

export default NavBar;

