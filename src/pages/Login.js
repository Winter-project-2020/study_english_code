import React, { useState } from 'react';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
 

function Login() {

	const [check, setCheck] = useState(false);
	const onChange = (e) => {
		setCheck(e.target.checked);
	}

	return (
		<div>
			로그인 페이지 입니다...
			<Button>로그인</Button>
			<div className="buttons">
				<Button size="large">버튼</Button>
				<Button size="large" outline>버튼</Button>
				
				<Button color="gray">버튼</Button>
				<Button color="gray" outline={true}>버튼</Button>
				
				<Button color="pink">버튼</Button>
				<Button 
					color="pink" 
					outline={true} 
					onClick={() => {
						console.log("클릭");
					}
				}>
					버튼
				</Button>

				<CheckBox onChange={onChange} checked={check}>다음 약관에 모두 동의</CheckBox>
			</div>
		</div>
	);
}

export default Login;