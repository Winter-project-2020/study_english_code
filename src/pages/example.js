// useRef 로 컴포넌트 안의 변수 만들기 
import React from 'react';

function User({ user }) {
	return (
		<div>
			<b>{user.username}</b> <span>({user.email})</span>
		</div>

	);
}

function CreateUser({ username, email, onChange, onCreate }) {
	return (
		<div>
			<input 
				name="username" 
				placeholder="계정명"
				onChange={onChange} 
				value={username}	
			/>
			<input 
				name="email" 
				placeholder="이메일"
				onChange={onChange} 
				value={email}	
			/>
			<button onClick={onCreate}>등록</button>	
 		</div>
	);
}

function example({ props }) {


	return (
		<div>
			{
				users.map((user, index) => (<User user={user} key={user.id} />))
					}
				)
			}
		</div>
	);
}

export default example;
// useRef : 어떠한 변수를 계속 기억하고 싶을 때 사용한다.
// nextId.current 를 바꾸면 값도 바뀜. 
// 컴포넌트가 리 렌더링 되지 않음 

/**
 *  app.js
 * function App() {
 * 
 * 		
 * 		const [inputs, setInputs] = useState({
 * 			username: '',
 * 			email: '',
 * 		});
 * 		const { username, email } = inputs;
 * 		const onChange = e => {
 * 			const { name, value } = e.target;
 * 			setInputs({
 * 				...inputs, 
 * 				[name]: value
 * 			});
 		 };
   			
  	

    const [users, setUsers] = useState([
		{
			id: 1,
			username: 'ayoung',
			email: 'ayoung@gmail.com'
		},
		{
			id: 2,
			username: 'user2',
			email: 'user2@gmail.com'	
		},
		{
			id: 3,
			username: 'user3',
			email: 'user3@gmail.com'
		}
	]);

	const nexId = useRef(4);
	
	const onCreate = () => {
		
		// 기존 배열을 복사해 배열에 새로운 항목 추가하기  1.스프레드 연산자 (...)
		const user = {
			id: nextId.current,
			username,
			email,	
		};
		setUsers([...users, user]);

		// 2. concat함수 이용  
		setUsers([users.concat(user)]);


		
		setInputs({
			username: '',
			email: ''
		});

		console.log(nextId.current); //4
		nextId.current += 1;
		// 함수가 실행될 때 마다 nextId 값 1 증가
	}

	return (
		<div>
			<CreateUser 
			username={username} 
			email={email} 
			onChange={onChange} 
			onCreate={onCreate} />
			<example user={users} />
		</div>
	);
 * }
 */

