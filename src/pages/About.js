import React from 'react';
import qs from 'qs';

// 쿼리 사용
/* 
/about?a=1 입력하면 pathname : "/about" search : "?a=1"
hash : "" , state : undefined

location 내부에 search라는 값이 생성
이 값을 추출하기위해(파싱한다) qs 라이브러리 사용
=> yarn add qs

ignoreQueryPrefix: true, : 맨 앞 물음표 제외하고 파싱
url 파라미터, 쿼리 모두 결과는 문자열로 읽어진다.
*/

function About({ location }) {
	console.log(location);
	const query = qs.parse(location.search, {
		
		ignoreQueryPrefix: true,
	});
	const detail = query.detail === 'true';

	return(
		<div>
			<h1>소개</h1>
			<p>
			{/* http://localhost:3000/about?detail=true 일 때 동작*/}
				라우터 연결 예제
				{detail && <p>detail === true 입니다.</p>}
			</p>
		</div>
	);
}
export default About;