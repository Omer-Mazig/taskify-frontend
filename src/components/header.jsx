import React from "react";
import { Link } from "react-router-dom";

import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/auth-context";
import { LogOut, Settings2 } from "lucide-react";

function Header() {
  const { loggedInUser, logout } = useAuth();

  function handleLogout() {
    logout();
  }
  return (
    <header className="bg-white/5 h-14 mb-16">
      <div className="px-4 max-w-5xl mx-auto flex justify-between items-center h-full">
        <div>
          <Link className="text-primary uppercase font-bold" to="/">
            Logo
          </Link>
        </div>
        <nav>
          <ul className="flex gap-2">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/task">Tasks</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="h-8 w-8">
                <AvatarImage src={loggedInUser?.imgUrl} />
                <AvatarFallback>
                  {loggedInUser?.firstName[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer space-x-2"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer space-x-2">
                <Settings2 className="h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
