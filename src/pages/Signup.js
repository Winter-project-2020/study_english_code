// 회원가입 페이지
// redux로 상태관리 하려고 한다. 
import React, { useEffect } from 'react';

function Signup({ history }) {
	const goBack = () => {
		history.goBack();
	}
	const goHome = () => {
		history.push('/');
	}
	useEffect(() => {
		console.log(history);
		// 사용자 이탈 방지
		const unblock = history.block('');
		return () => {
			unblock();
		};
	}, [history]);

	return(			
		<div>
			회원가입 페이지 
		</div>
	);
}
export default Signup;