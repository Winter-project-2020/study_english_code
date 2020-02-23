import React from 'react';
// import Header from './Header';

function Wrapper({ children }) {
	// const style = {
	// 	borderBottom: '1px solid #333',
	// 	background: '#FFF',
	// 	padding: 10,
	// 	boxShadow: '0 0 5px rgba(0, 0, 0, 0.75)'
	};

	return ( 
		<div style={style}>
			{children}
			{/* <Header /> */}
		</div>
	);
}

export default Wrapper;
// props children
// 태그와 태그 사이의 내용을 의미하는 것 : children