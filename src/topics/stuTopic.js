import React from 'react';
import { 
	Card, 
	Button, 
	CardHeader, 
	CardText, 
	CardBody,
	CardTitle  } from 'reactstrap';

const stuTopic = ( props ) => {
	return (
		<div>
			<Card>
				<CardHeader>Student</CardHeader>
				<CardBody>
					<CardTitle></CardTitle>
					<CardText>당신이 어떤 학교에 다니는지, 그리고 그 학교의 상징에 대해 설명해주세요.</CardText>
					<Button>에상 답변</Button>
				</CardBody>
			</Card>
		</div>
	);
}

export default stuTopic;