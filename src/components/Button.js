import React from 'react';
import './Button.scss';

function Button({children}) {
	return (
		<div className="button-container">
			<Button className="Button">{children}</Button>
		</div>
	);
}

export default Button;