import HomePage from "@/allPageComponents/home";
import { ToastProvider, ToastViewport } from "@/components/ui/toast";
import Head from "next/head";

export default function Home() {
	return (
		<div>
			<ToastProvider>
				<HomePage />
				<ToastViewport />
			</ToastProvider>
		</div>
	);
}
