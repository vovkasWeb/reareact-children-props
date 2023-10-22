import React, { Children, Component } from 'react'
import { ReactDOM } from 'react-dom'
import './App.css'

class Form extends Component {
	constructor(props) {
		super(props)
		this.myRef = React.createRef()
	}
	componentDidMount() {
		this.myRef.current.focus()
	}

	render() {
		return (
			<div>
				<form className='w-50 border mt-5 p-3 m-auto'>
					<div className='mb-3'>
						<label htmlFor='exampleFormControlInput1' className='form-label'>
							Email address
						</label>
						<input
							ref={this.myRef}
							type='email'
							className='form-control'
							id='exampleFormControlInput1'
							placeholder='name@example.com'
						/>
					</div>
					<div className='mb-3'>
						<textarea
							className='form-control'
							id='exampleFormControlTextarea1'
							rows='3'
						></textarea>
					</div>
                    <Portal>
                        <Msg/>
                    </Portal>
				</form>
			</div>
		)
	}
}
const Portal = props=>{
    const node = document.createElement('div');
    document.body.appendChild(node);
    return ReactDOM.createPortal(props.children,node);
}
const Msg = () => {
	return (
		<label htmlFor='exampleFormControlTextarea1' className='form-label'>
			Example textarea
		</label>
	)
}

function App() {
	return <Form />
}

export default App
