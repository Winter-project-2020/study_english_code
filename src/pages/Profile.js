import React from 'react';

const profileDate = {
	ayoung: {
		name: '아영',
		description: 'student'
	},
	homer: {
		name: '호머 심슨',
		description: '심슨의 아빠 역할 캐릭터'
	}

}
    //   파라미터 : id,username처럼 정해진 특정 값 
    //   쿼리 : 다양한 옵션을 줘서 조회할 때 사용 (검색) 
	//   URL 파라미터 
	/* url파라미터 조회할 때 match 사용, 
	라우트컴포넌트에서 자동으로 받아옴 
	
	*/
	
	function Profile({ match }) {
		const { username } = match.params;
		const profile = profileDate[username];
		
		if(!profile) {
			return (
				<div>존재하지 않는 사용자입니다.</div>
			);
		}
		return(
			<div>
				<h3>{username} ({profile.name})</h3>
				<p>{profile.description}</p>
			</div>
		);
	}
export default Profile;