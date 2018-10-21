import React from 'react'
import { render } from 'react-dom'
import {articles} from './fixtures'
import App from './components/App'
import './index.css'

render(<App articles={articles} /> , document.getElementById('cntnr'))
