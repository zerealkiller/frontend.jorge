import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NavUser } from "./nav-user"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

export function Navbar() {
    const user = {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    }

    return (
        <nav className="flex items-center justify-between p-2 bg-background border-b">
            <div className="flex items-center space-x-4">
                <SidebarTrigger className="-ml-1" />
                <h1 className="text-xl font-bold">Uniweb</h1>
            </div>
            <div className="flex items-center space-x-4">
                <NavUser user={user} />
            </div>
        </nav>
    )
}