import React from 'react';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Sass/custom.scss';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	typography: {
		fontFamily: 'Recipekorea',
	},
});

ReactDOM.render(
	// 라우터 적용하기
	<BrowserRouter>
		<MuiThemeProvider theme={theme}>
			<App />
		</MuiThemeProvider>
	</BrowserRouter>,
	document.getElementById('root')
);


serviceWorker.unregister();
// app을 라우터로 감싸면 Route를 사용할 때 match, history, location등의
// props 를 사용할 수 있게 해준다.