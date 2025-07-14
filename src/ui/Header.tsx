import { Avatar, AvatarFallback } from '@/ui/avatar';
import { DropdownMenu, DropdownMenuTrigger } from '@/ui/dropdown-menu';
import LogoutBtn from './LogoutBtn';

interface HeaderProps {
  userName: string;
}

const Header = ({ userName }: HeaderProps) => {
  return (
    <header className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <h1 className="text-xl font-bold text-gray-900">پنل مدیریت</h1>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-3 focus:outline-none">
            <Avatar className="w-10 h-10">
              <AvatarFallback>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-full h-full text-gray-400"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </AvatarFallback>
            </Avatar>
            <span className="font-medium text-gray-700">
              {userName}
            </span>
          </button>
        </DropdownMenuTrigger>

        <LogoutBtn />
      </DropdownMenu>
    </header>
  );
};

export default Header;
