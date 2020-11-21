import * as React from "react";

import './style.sass'

import Navbar from "./navbar/NavBar";


export interface AppProps {
	who: string;
	where: string;
}

export const App = (props: AppProps) => (
	<Navbar/>
)