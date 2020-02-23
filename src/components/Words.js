// 단어 추천 컴포넌트
import React from 'react'; 
import { Header, Container, Segment } from 'semantic-ui-react';
import './Words.css';


const Words = () => (
	<div className="words__container">
		<div className="h3">
			<Container text>
				<Segment.Group>
					<Segment className="title"><b>오늘의 단어 추천</b></Segment>
					<Segment>단어 1</Segment>
					<Segment>단어 2</Segment>	
				</Segment.Group>
			</Container>
		</div>
	</div>
);


export default Words; 
