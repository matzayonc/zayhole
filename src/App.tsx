import * as React from "react";

export interface AppProps {
	who: string;
	where: string;
}

export const App = (props: AppProps) => (
	<h1>
		Hello {props.who}! Welcome to {props.where}!
	</h1>
)