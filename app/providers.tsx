'use client';
import type { ReactNode } from 'react';
import { LayoutProvider } from '@/context/Layout';

interface Props {
	children: ReactNode;
}
export default function Providers(props: Props) {
	return (
		<LayoutProvider>{props.children}</LayoutProvider>
	);
}