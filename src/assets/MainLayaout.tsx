import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<>
			<nav className="flex flex-col sm:flex-row items-center justify-center bg-primaryNav w-full">
				<Link
					className="text-2xl font-semibold whitespace-nowrap text-primaryText hover:text-gray
						m-4"
					to={"/"}
				>
					<h1 className="flex items-center font-pubText text-4xl">
                        🏠
                        <span className="ml-2">ReserveTaSalle</span>                            
					</h1>
				</Link>
                <Link
					className="text-2xl font-semibold whitespace-nowrap text-primaryText hover:text-gray
						m-4"
					to={"/"}
				>
					<h1 className="flex items-center font-pubText text-4xl">
                        
                        <span className="ml-2">Booking</span>                            
					</h1>
				</Link>

			
			</nav>
			<Outlet />
		</>
	);
};

export default MainLayout;