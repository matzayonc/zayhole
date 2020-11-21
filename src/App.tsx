import * as React from "react";
import NavBar from './navbar/NavBar'
import './style.sass'


export interface AppProps {
	who: string;
	where: string;
}

export const App = (props: AppProps) => (
	<NavBar/>
)