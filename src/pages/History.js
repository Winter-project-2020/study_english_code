import React, { useEffect } from 'react';

/* 
 history 객체 :
 goBack 뒤로 감
 goHome 
 이동: action: "push" 


*/
function History({ history }) {
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

	return (
		<div>
			{/* <button onClick={goBack}>뒤로가기</button>
			<button onClick={goHome}>홈으로</button>		 */}
		</div>
	);
}

export default History;