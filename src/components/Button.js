import React from 'react';
import classNames from 'classnames';
import './Button.scss';

// 버튼 사이즈 설정하기
// classnames 라이브러리 사용하기 

// ...rest : props 설정 편하게 하기 
function Button({
	children, 
	size, 
	color, 
	outline, 
	fullWidth,
	...rest
}) {
	return (
		<div className="button-container">
			{/* <Button className={['Button', size].join(' ')}>{children}</Button> */}
			<Button className={classNames('Button', size, color, {
				outline,
				fullWidth
			})}
			{...rest}
			>
				{children}
			</Button>
		</div>
	);
}

Button.defaultProps = {
	size: 'medium',	
	color: 'blue'
};

export default Button;