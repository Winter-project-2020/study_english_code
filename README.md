# 프로젝트 제목 : study english
>번역기를 사용해 영어공부를 좀 더 쉽게 도와주는 웹
## 1.결과물
## 2. 환경설정
```
npm install -g create-react-app
create-react-app --version
cd study_english_code

npm install
npm install react
npm install react-dom
npm install react-router-dom

// react strap 설치 
npm install --save bootstrapnpm install --save reactstrap react react-dom

// 라이브러리
// https://react-icons.netlify.com/#/icons/md
yarn add styled-components
yarn add react-icons
npm install @material-ui/core

// index.js
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
    	<App />
  	</BrowserRouter>,
  document.getElementById("root");	
);


npm start
```



- 웹폰트 설정

```
// material-ui 
npm install @material-ui/core

// src 안에 fonts 디렉토리 생성
// fonts -- Recipekorea.ttf 추가

// index.css
@font-face {
  font-family: 'Recipekorea';
  src: url(./fonts/Recipekorea.ttf) format('truetype');
}

// index.js - 전체 App component wrapping
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	typography: {
		fontFamily: 'Recipekorea',
	},
});

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>, 
	document.getElementById('root')
);

```

