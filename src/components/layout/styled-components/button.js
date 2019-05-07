import React from 'react'
import styled from 'styled-components'
import colors from "./colors";
import t from 'prop-types'

const ButtonStyled = styled.button`
    transition: all .3s ease;
    background: ${props => colors[Object.keys(props).find(p => colors[p])] || colors.default};
    text-transform: ${props => props.upper ? 'uppercase' : 'none'};
    font-weight: bold;
    color: ${props => props.color ? colors.black : colors.white};
    padding: 9px 13px;
    margin: 1px;
    border: none;
    border-radius: 2px;
    &:hover {
        opacity: .7;
    }
`;

const Button = ({ children, ...props }) => (
    <ButtonStyled {...props}>{children}</ButtonStyled>
)

export default Button

Button.propTypes = {
    upper: t.bool,
    background: t.oneOf(['green', 'blue'])
}

Button.defaultProps = {
    upper: false,
    background: 'blue'
}