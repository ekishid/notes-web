export default function Header() {
	return (
		<header className="h-20 bg-neutral-900 flex justify-between text-white items-center px-8">
			<h1 className="text-2xl font-bold">Notes</h1>
			<div className="flex gap-4">
				<button>Create New</button>
				<button>Grid</button>
				<button>Table</button>
			</div>
		</header>
	);
}