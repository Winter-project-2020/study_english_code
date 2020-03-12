import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import stuTopic from '../topics/stuTopic';
import '../css/homeEx.css';
import '../images/word.png';
import { Link } from 'react-router-dom';
import { 
	Container,
	Row,
	Col,

	Media,

	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption,

	Button,   
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
	
	Card, CardHeader, CardBody, CardTitle, CardText, CardFooter, CardLink,
	Popover, PopoverHeader, PopoverBody, 
} from 'reactstrap';





const InsertFormPositioner = styled.div`
	width: 100%;
	bottom: 0;
	left: 0;
	top: 0;
	right: 0;
	position: absolute;
	background: #fff;

	border: 5px solid #f1f3f5;
	border-radius: 42px;
	border-width: 5px;
`;
const InsertForm = styled.div`
	background: #f1f3f5;
	padding: 32px;
	padding-bottom: 72px;
	border-bottom-left-radius: 16px;
	border-bottom-right-radius: 16px;
	border-top: 1px solid #e9ecef;
`;




const StyledTitle = styled.div`

	padding-top: 40px;
	padding-bottom: 13px;
	h3 {
		color: #495057;
		font-weight: bold;
		text-align: center;
	}
`;


const items = [
	{
		id: 1,
		altText: 'Slide 1',
		caption: 'slide 1',
		header: '오늘의 단어 추천',
	},
	{
		id: 2,
		altText: 'Slide 2',
		caption: 'slide 2',
		header: 'Study Opic !'
	}
];

const Home = (props) => {

	// 토글버튼 
	// 버튼 onClick={onTog} 로 설정하기 
	const [open, setOpen] = useState(false);
	const onTog = () => {
		setOpen(!open);
	}

	// 메인 페이지 수평 스크롤하는 슬라이드
	const [activeIndex, setActiveIndex] = useState(0);
	const [animate, setAnimate] = useState(false);

	const next = () => {
		if (animate) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	}
	const pre = () => {
		if (animate) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	}
	const goIndex = (nextIndex) => {
		if (animate) return;
		setActiveIndex(nextIndex);
	}

	const slides = items.map((item) => {
		return (
			<CarouselItem
				className="custom-tag"
				tag="div"
				onExiting={() => setAnimate(true)}
				onExited={() => setAnimate(false)}
			>
				<CarouselCaption className="text-light" captionText={item.caption} captionHeader={item.header} />
			</CarouselItem>
		);
	});




	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	}



	return(
		<div>
			<style>
				{
					`.custom-tag {
						
						height: 580px;
						background: #495057;
					}`
				}
			</style>
			<Carousel 
				activeIndex={activeIndex}
				next={next}
				previous={pre}
			>
				<CarouselIndicators
					items={items}
					activeIndex={activeIndex}
					onClickHandler={goIndex} />

				{slides}	
				<CarouselControl direction="prev" directionText="이전" onClickHandler={pre}/>
				<CarouselControl direction="next" directionText="다음" onClickHandler={next} />

			</Carousel>


			<div className="main__container">
				<div></div>
			</div>
		
			<Navbar color="light" light expand="md">
				{/* 제목 누르면 홈페이지로 다시 감 */}
				<NavbarBrand 
				href="/">Study Opic!</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						
						<NavItem>
							<NavLink href="#">스킬 체크</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">예시1</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								myPage
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem><Link to="/myPage">마이페이지</Link></DropdownItem>
								<DropdownItem>
									내 성적 관리
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>

				<div className="clearfix">
					<button className="btn float--right">
						<Link to="/login">로그인</Link>
					</button>{' '}
					<button className="btn float--right">
						<Link to="/register">계정 만들기</Link>
					</button>
				</div>	
			</Navbar>

			<stuTopic />

			<div>
				{/* <Media left top href="#">
					<Media object data-src="stu-topic.js/500x500" alt="student script" />
				</Media>
				<Media body>
					<Media heading>
						스크립트 
					</Media>
				</Media> */}

				{/* <Media heading className="mt-1" >
					스크립트
				</Media> */}
				
				<StyledTitle>
					<h3>스크립트 예제</h3>
				</StyledTitle>


				{/* 학생 스크립트 카드 1 */}
				<Row>
					<Col>
						<Card body outline style={{
							boxSizing: 'border-box',
							maxWidth: '100%',
							borderRadius: '42px',
							borderWidth: '5px',
						}}>
							<CardHeader tag="h2">Student</CardHeader>
							<CardBody>
								<CardTitle></CardTitle>
								<CardText>당신이 어떤 학교에 다니는지, 그리고 그 학교의 상징에 대해 설명해주세요.</CardText>
								<Button open={open} onClick={onTog}>예상 답변</Button>
							</CardBody>
							<CardFooter className="text-muted"></CardFooter>
							<CardBody>
								<CardText>당신에게 가장 기억에 남는 강의는 무엇인지 설명해주세요.</CardText>
								<Button open={open} onClick={onTog}>예상 답변</Button>
							</CardBody>
							<CardFooter className="text-muted"></CardFooter>
							<CardBody>
								<CardText>공강 시간에 주로 무엇을 하면서 시간을 보내는지 설명해주세요.</CardText>
								<Button open={open} onClick={onTog}>
									예상 답변
								</Button>
							</CardBody>
							<CardFooter className="text-muted"><CardLink href="/scriptMain">more ...</CardLink></CardFooter>
						</Card>
					</Col>


					<Col>		
						<Card body outline style={{
							boxSizing: 'border-box',
							maxWidth: '100%',
							borderRadius: '42px',
							borderWidth: '5px',
						}}>
							<CardHeader tag="h2">돌발 토픽</CardHeader>
							<CardBody>
								<CardTitle></CardTitle>
								<CardText>당신의 집에 대해서 설명해주세요.</CardText>
								<Button open={open} onClick={onTog}>예상 답변</Button>
							</CardBody>
							<CardFooter className="text-muted"></CardFooter>
							<CardBody>
								<CardText>집에 처음으로 이사했던 날에 대해서 설명해주세요.</CardText>
								<Button open={open} onClick={onTog}>예상 답변</Button>
							</CardBody>
							<CardFooter className="text-muted"></CardFooter>
							<CardBody>
								<CardText>당신의 침실에는 무엇이 있고 어떻게 꾸며놓았는지 자세하게 설명해주세요.</CardText>
								<Button open={open} onClick={onTog}>
									예상 답변
								</Button>
							</CardBody>
						</Card>
							{/* {open && (
								<InsertFormPositioner>
									답변 
								</InsertFormPositioner>	
							)}		 */}
						
					</Col>
				</Row>

				<hr />			
				<StyledTitle>
					<h3>시험 일정</h3>
				</StyledTitle>	
				
				<Row>
					<Col>		
						<Card body outline style={{
							boxSizing: 'border-box',
							marginLeft: '15%',
							marginRight: '15%',
							borderRadius: '42px',
							borderWidth: '5px',
						}}>
							<CardHeader tag="h2">예</CardHeader>
							<CardBody>
								
							</CardBody>
							
								
							
							<CardBody>
								
							</CardBody>
							<CardFooter className="text-muted"></CardFooter>
							
						</Card>
					</Col>
				</Row>

				<hr />			
				<StyledTitle>
					<h3>성적 관리</h3>
				</StyledTitle>	
				<Row>
					<Col>		
						<Card body outline style={{
							boxSizing: 'border-box',
							marginLeft: '15%',
							marginRight: '15%',
							borderRadius: '42px',
							borderWidth: '5px',
						}}>
							<CardHeader tag="h2">예</CardHeader>
							<CardBody>
								
							</CardBody>
							
								
							
							<CardBody>
								
							</CardBody>
							<CardFooter className="text-muted"></CardFooter>
							
						</Card>
					</Col>
				</Row>			

				
			</div>	

		</div>
	);
}

Navbar.PropTypes = {
	light: PropTypes.bool,
	dark: PropTypes.bool,

}
export default Home;