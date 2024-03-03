'use client';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPlus, faGrip, faList } from '@fortawesome/free-solid-svg-icons';
import { useLayout } from '@/context/Layout';

export default function Header() {
	const { layout, changeLayout } = useLayout();
	return (
		<header className="h-20 bg-neutral-900 flex justify-between text-white items-center px-8">
			<h1 className="text-2xl font-bold">Notes</h1>
			<div className="flex gap-4">
				<button className="flex items-center justify-center uppercase text-xs gap-2 py-3 px-4 w-full shadow-lg shadow-black bg-neutral-800 rounded-lg hover:bg-white hover:shadow-black hover:text-black hover:shadow">
					<Icon className="text-xs" icon={faPlus} /> New
				</button>
				<div className="shadow-inner shadow-black flex items-center justify-center w-fit rounded-full bg-neutral-800">
					<button className={`ease-in-out duration-700 ${layout === 'grid' ? 'bg-black py-2 px-3 rounded-full' : 'py-2 px-3'}`} onClick={() => changeLayout('grid')}>
						<Icon icon={faGrip} />
					</button>
					<button className={`ease-in-out duration-700 ${layout === 'list' ? 'bg-black py-2 px-3 rounded-full' : 'py-2 px-3'}`} onClick={() => changeLayout('list')}>
						<Icon icon={faList} />
					</button>
				</div>
			</div>
		</header>
	);
}