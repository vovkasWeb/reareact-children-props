
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Button } from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<StrictMode>
		<App />
		<BigButton as='a'>Отправить отчет</BigButton>
	</StrictMode>
)


const BigButton = styled(Button)`
	margin: 0 auto;
	width: 245px;
	text-align: center;
`

