import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
	body{
		margin:0;
		padding: 0;
	}

`;

const Contatiner = styled.div`
	height: 100vh;
	width: 100%;
	background-color: #fafafa;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

const Card = styled.div`
	background-color: #fff;
`;

const Button = styled.button`
	border-radius: 30px;
	padding: 25px 15px;
	&:focus,
	&:active {
		outline: none;
	}
	background-color: ${(props) => props.theme.successColor};
`;
const App = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Contatiner>
					<Form />
				</Contatiner>
			</ThemeProvider>
		</>
	);
};

const Form = () => (
	<Card>
		<Button>Click</Button>
	</Card>
);

export default App;
