import * as React from 'react'
import { createRoot } from 'react-dom/client'
import styled from 'styled-components'

const Header = styled.h1`
color: red;
`
const Main = (<Header>Markdown Editor+++</Header>)

const root = createRoot(document.getElementById('app'))
root.render(Main)
