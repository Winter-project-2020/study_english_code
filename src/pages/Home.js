import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import '../css/homeEx.css';
import '../images/word.png';

import { 
	Container,
	Row,
	Col,

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
	NavbarText
} from 'reactstrap';




// // server side rendering	
// const getWidth = () => {
// 	const isSSR = typeof window === 'undefined';
// 	return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
// }

// const Heading = ({ mobile }) => (
// 	<Container text>
// 		<Header 
// 			as='h1'
// 			content='Study Opic'
// 			inverted
// 			style={{
// 				fontSize: mobile ? '2em' : '4em',
// 				fontWeight: 'normal',
// 				marginBottom: 0,
// 				marginTop: mobile ? '1.5em' : '3em',
// 			}} 
// 		/>
// 		<Header 
// 			as='h2'
// 			content='Do whatever you want when you want to.'
// 			inverted
// 			style ={{
// 				fontSize: mobile ? '1.5em' : '1.7em',
// 				fontWeight: 'normal',
// 				marginTop: mobile ? '0.5em' : '1.5em',	
// 			}}
// 		/>
// 		<Button primary size='huge'>
// 			Get Started
// 			<Icon name='right arrow' />
// 		</Button>
// 	</Container>
// );

// Heading.propTypes = {
// 	mobile: PropTypes.bool,
// };

// class DesktopContainer extends Component {
// 	state = {};

// 	hideMenu = () => {
// 		this.state({ fixed: false });
// 	}
// 	showMenu = () => {
// 		this.state({ fixed: true })
// 	}
// 	render () {
// 		const { children } = this.props;
// 		const { fixed } = this.state;
		
// 		return (
// 			<Responsive 
// 				getWidth={getWidth} 
// 				minWidth={Responsive.onlyTablet.minWidth }>
				
// 				<Visibility 
// 					once={false}
// 					onBottomPassed={this.props.showMenu}
// 					onBottomPassedReverse={this.props.hideMenu} 
// 				>
// 					<Segment 
// 						inverted
// 						textAlign='center'
// 						style={{ 
// 							minHeight: 700, 
// 							padding: '1em 0em' }}
// 						vertical
// 					>
						
// 						<Menu 
// 							fixed={fixed? 'top' : null }
// 							inverted={!fixed} 
// 							pointing={!fixed} 
// 							secondary={!fixed}
// 							size='large'
// 						>
// 							<Container>
// 								<Menu.Item as='a' active>
// 									Home
// 								</Menu.Item>
// 								<Menu.Item as='a'>Work</Menu.Item>
// 								<Menu.Item as='a'>Team</Menu.Item>
// 								<Menu.Item as='a'>Careers</Menu.Item>
// 								<Menu.Item position='right'>
// 									<Button as='a' inverted={!fixed}>
// 										Log in
// 									</Button>
// 									<Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em'}}>
// 										Sign up
// 									</Button>
// 								</Menu.Item>
// 							</Container>	
// 						</Menu>
// 						<Heading />
// 					</Segment>
// 				</Visibility>	

// 				{children}	
// 			</Responsive>

// 		);
// 	}
// }	


// DesktopContainer.propTypes = {
// 	children: PropTypes.node,
// };

// class MobileContainer extends Component {
// 	state = {}

// 	handleSidebarHide = () => {
// 		this.setState({ sidebarOpened: false });
// 	}
// 	handleToggle = () => {
// 		this.setState({ sidebarOpened: true });
// 	}

// 	render() {
// 		const { children } = this.props;
// 		const { sidebarOpened } = this.state;
// 		return (
// 			<Responsive
// 				as={Sidebar.Pushable}
// 				getWidth={getWidth}
// 				maxWidth={Responsive.onlyMobile.maxWidth}
// 			>
// 				<Sidebar
// 					as={Menu}
// 					animation='push'
// 					inverted
// 					onHide={this.handleSidebarHide}
// 					vertical
// 					visible={sidebarOpened}
// 				>
// 					<Menu.Item as='a' active>
// 						Home
// 					</Menu.Item>
// 					<Menu.Item as='a'>Work</Menu.Item>						
// 					<Menu.Item as='a'>Team</Menu.Item>
// 					<Menu.Item as='a'>Careers</Menu.Item>
// 					<Menu.Item as='a'>Log in</Menu.Item>
// 					<Menu.Item as='a'>Sign up</Menu.Item>
// 				</Sidebar>
// 				<Sidebar.Pusher dimmed={sidebarOpened}>
// 					<Segment
// 						inverted
// 						textAlign='center'
// 						style={{ minHeight: 350, padding: '1em 0em' }}
// 						vertical
// 					>
// 						<Container>
// 							<Menu inverted pointing secondary size='large'>
// 								<Menu.Item onClick={this.handleToggle}>
// 									<Icon name='sidebar' />
// 								</Menu.Item>
// 								<Menu.Item position='right'>
// 									<Button as='a' inverted>
// 										Log in
// 									</Button>
// 									<Button as='a' inverted style={{ marginLeft: '0.5em' }}>
// 										Sign up 
// 									</Button>
// 								</Menu.Item>
// 							</Menu>
// 						</Container>
// 						<Heading mobile />
// 					</Segment>
// 					{children}
// 				</Sidebar.Pusher>
// 			</Responsive>
// 		);
// 	}
// }

// MobileContainer.propTypes = {
// 	children: PropTypes.node,
// }


// const ResponsiveContainer = ({ children }) => (
// 	<div>
// 		<DesktopContainer>{ children }</DesktopContainer>
// 		<MobileContainer>{ children }</MobileContainer>
// 	</div>
// )

// ResponsiveContainer.propTypes = {
// 	children: PropTypes.node,
// }
const items = [
	{
		id: 1,
		src: '../images/word.png',
		altText: 'Slide 1',
		caption: 'slide 1',
		header: '오늘의 단어 추천'
	},
	{
		id: 2,
		altText: 'Slide 2',
		caption: 'slide 2',
		header: 'Study Opic !'
	}
];

const Home = (props) => {
	
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
				<img src={item.src} alt={item.altText} />
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
						max-width: 100%;
						height: 750px;
						background: #3A5A69;
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
				<div>예시</div>
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
								<DropdownItem>
									내 성적 관리
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>

				<div className="clearfix">
					<button className="btn float--right">로그인</button>{' '}
					<button className="btn float--right">계정 만들기</button>
				</div>	
			</Navbar>



		</div>
	);
}

Navbar.PropTypes = {
	light: PropTypes.bool,
	dark: PropTypes.bool,

}
export default Home;