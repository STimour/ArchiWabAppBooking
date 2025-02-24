import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<>
			<nav className="p-1 flex items-center justify-between bg-primaryNav w-full">
				<div className="flex items-center w-1/5">
					<Link
						className="m-4"
						to={"/"}
					>
						<h1 className="flex flex-col font-pubText text-5xl text-primaryText font-semibold whitespace-nowrap hover:text-gray">
							<span className="ml-2">Co-working</span>
							<span className="ml-2">space</span>
						</h1>
					</Link>
				</div>
				<div className="flex items-center w-4/5 justify-end sm:w-3/5">
					<Link
						className="text-2xl font-semibold text-primaryText hover:text-gray m-4"
						to={"/Planning"}
					>
						<span className="ml-2">Planning</span>
					</Link>
					<Link
						className="text-2xl font-semibold text-primaryText hover:text-gray m-4"
						to={"/EspacePersonnel"}
					>
						<span className="ml-2">Espace Personnel</span>
					</Link>
					<Link
						className="text-2xl font-semibold text-primaryText hover:text-gray m-4"
						to={"/ContactezNous"}
					>
						<span className="ml-2">Contactez-nous</span>
					</Link>
				</div>
			</nav>
			<Outlet />
		</>
	);
};

export default MainLayout;
