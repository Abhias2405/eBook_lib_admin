import { Button } from '@/components/ui/button';
import { Toaster } from 'sonner';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import useTokenStore from '@/store';
import {
    CircleUser,
    Home,
    Menu,
    Package,
    Package2,
} from 'lucide-react';
import { Link, Navigate, NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    const { token, setToken } = useTokenStore((state) => state);

    if (token === '') {
        return <Navigate to={'/auth/login'} replace />;
    }

    const logout = () => {
        console.log('Logging out!');
        setToken('');
    };

    return (
        <>
            <Toaster position="top-right" richColors />
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link to="/" className="flex items-center gap-2 font-semibold">
                            <img className="h-6 w-6" src="/logo.png" alt="logo" />
                            <span className="">Coder's Book</span>
                        </Link>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            <NavLink
                                to="/dashboard/home"
                                className={({ isActive }) => {
                                    return `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                                        isActive && 'bg-muted'
                                    }`;
                                }}>
                                <Home className="h-4 w-4" />
                                Home
                            </NavLink>

                            <NavLink
                                to="/dashboard/books"
                                className={({ isActive }) => {
                                    return `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                                        isActive && 'bg-muted'
                                    }`;
                                }}>
                                <Package className="h-4 w-4" />
                                Books{' '}
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid gap-2 text-lg font-medium">
                                <NavLink
                                    to="/dashboard/home"
                                    className={({ isActive }) =>
                                        `mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${
                                            isActive ? 'text-primary font-semibold' : ''
                                        }`
                                    }>
                                    <Home className="h-5 w-5" />
                                        Home
                                </NavLink>
                            
                                <NavLink
                                    to="/dashboard/books"
                                    className={({ isActive }) =>
                                        `mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${
                                            isActive ? 'text-primary font-semibold' : ''
                                        }`
                                    }>
                                    <Package2 className="h-5 w-5" />
                                        Books
                                </NavLink>
                            </nav>
                            
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1">

                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Button onClick={logout} variant={'link'}>
                                    Logout
                                </Button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    <Outlet />
                </main>
            </div>
            </div>
        </>
    );
};

export default DashboardLayout;