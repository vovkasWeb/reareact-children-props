import React, { Component } from 'react'

import BootstrapTest from './BootstrapTest'

import './App.css'

const EmpItem= `
	padding: 20px;
	margin-bottom: 15px;
	border-radius: 5px;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	a {
		display: block;
		margin: 10px 0 10px 0;
		color: ${props => (props.active ? 'orange' : 'black')};
	}
	input {
		display: block;
		margin-top: 10px;
	}
`

const Header = `
	font-size: 22px;
`

export const Button = `
	display: block;
	padding: 5px 15px;
	background-color: gold;
	border: 1px solid rgba(0, 0, 0, 0.2);
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`

class WhoAmI extends Component {
	constructor(props) {
		super(props)
		this.state = {
			years: 27,
			position: '',
		}
	}

	nextYear = () => {
		this.setState(state => ({
			years: state.years + 1,
		}))
	}

	commitInputChanges = (e, color) => {
		console.log(color)
		this.setState({
			position: e.target.value,
		})
	}

	render() {
		const { name, surname, link } = this.props
		const { position, years } = this.state

		return (
			<EmpItem active>
				<Button onClick={this.nextYear}>+++</Button>
				<Header>
					My name is {name}, surname - {surname}, age - {years}, position -{' '}
					{position}
				</Header>
				<a href={link}>My profile</a>
				<form>
					<span>Введите должность</span>
					<input
						type='text'
						onChange={e => this.commitInputChanges(e, 'some color')}
					/>
				</form>
			</EmpItem>
		)
	}
}

const Wrapper =`
	width: 600px;
	margin: 80px auto 0 auto;
`

const DynamicGreating = props => {
	return (
		<div className={'mb-3 p-3 border border-' + props.color}>
			{React.Children.map(props.children, child => {
				return React.cloneElement(child, {
					className: 'shadow p-3 m-3 border rounded',
				})
			})}
		</div>
	)
}

const HelloGreating = () => {
	return (
		<div style={{ width: '600px', margin: '0 auto' }}>
			<DynamicGreating color={'primary'}>
				<h2>Hello world!</h2>
			</DynamicGreating>
		</div>
	)
}

const Message = props => {
	return <h2>The counter is {props.counter}</h2>
}

class Counter extends Component {
	state = {
		counter: 0,
	}

	changeCounter = () => {
		this.setState(({ counter }) => ({
			counter: counter + 1,
		}))
	}

	render() {
		return (
			<>
				<button className={'btn btn-primary'} onClick={this.changeCounter}>
					Click me
				</button>
				{this.props.some(this.state.counter)}
			</>
		)
	}
}

c
function App() {
	return (
		<Wrapper>
			<Counter some={counter => <Message counter={counter} />} />

			<HelloGreating />
			<BootstrapTest
				left={
					<DynamicGreating color={'primary'}>
						<h2>This weel was hard</h2>
						<h2>Hello world!</h2>
					</DynamicGreating>
				}
				right={
					<DynamicGreating color={'primary'}>
						<h2>RIGHT!</h2>
					</DynamicGreating>
				}
			/>

			<WhoAmI name='John' surname='Smith' link='facebook.com' />
			<WhoAmI name='Alex' surname='Shepard' link='vk.com' />
		</Wrapper>
	)
}

export default App
