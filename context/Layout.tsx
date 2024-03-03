import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface ProviderProps {
	children: ReactNode;
}
type Layout = 'grid' | 'list';
interface ContextProps {
	layout: Layout;
	changeLayout: (layout: Layout) => void;
}

const LayoutContext = createContext<ContextProps>({ layout: 'list', changeLayout: () => {} });

export const useLayout = () => useContext(LayoutContext);

export const LayoutProvider = (props: ProviderProps) => {
	const [layout, setLayout] = useState<Layout>('list');
	const changeLayout = (value: Layout) => setLayout(value);

	return (
		<LayoutContext.Provider value={{ layout, changeLayout }}>
			{props.children}
		</LayoutContext.Provider>
	);
};
