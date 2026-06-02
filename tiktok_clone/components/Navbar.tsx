import { Home, Compass, User } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { icon: <Home className="w-6 h-6" />, label: "Trang chủ" },
    { icon: <Compass className="w-6 h-6" />, label: "Khám phá" },
    { icon: <User className="w-6 h-6" />, label: "Hồ sơ" },
  ];

  return (
    <nav className="fixed bg-black border-zinc-800 text-white z-50
      bottom-0 left-0 right-0 h-16 border-t flex flex-row justify-around items-center
      md:top-0 md:left-0 md:bottom-0 md:w-64 md:h-screen md:border-r md:flex-col md:justify-start md:items-start md:p-6 md:space-y-6"
    >
      <div className="hidden md:block text-2xl font-black tracking-wider mb-6 text-red-500">
        TOPTOP
      </div>

      {navItems.map((item, index) => (
        <button 
          key={index} 
          className="flex items-center space-x-4 p-2 w-full hover:bg-zinc-900 rounded-lg transition"
        >
          {item.icon}
          <span className="text-sm font-semibold hidden md:block">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}