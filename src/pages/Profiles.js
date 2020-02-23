// import React from 'react';
// import Profile from './Profile';

// import { Link, Route } from 'react-router-dom';

// function Profiles({}) {
// 	return (
// 		<div>
// 			<h3>사용자 목록</h3>
// 			<ul>
// 				<li><Link to="/profiles/ayoung">ayoung</Link></li>
// 				<li><Link to="/profiles/homer">homer</Link></li>
// 			</ul>	

// 			{/* render 를 넣으면 바로 함수형컴포넌트 선언해서 넣어줄 수 있음 */}
// 			<Route path="/profiles" exact render={() => <div>사용자를 선택해주세요</div>} />
// 			<Route path="/profiles/:username" component={Profile} />
// 		</div>

// 	);
// }

// export default Profiles;
