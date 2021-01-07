import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { useDarkModeManager } from '../../contexts/LocalStorage'

const Wrapper = styled.div`
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  ${(props) =>
    props.fill && !props.height
      ? css`
          height: 100vh;
        `
      : css`
          height: 180px;
        `}
`

const AnimatedImg = styled.div`
  & > * {
    width: ${(props) =>
    (props.index ? '120px' : '60px')};
  }
`

const LocalLoader = ({ fill, index }) => {
  const [darkMode] = useDarkModeManager()

  return (
    <Wrapper fill={fill}>
      <AnimatedImg index={index}>
        {index ? (
          <img src={require(darkMode ? '../../assets/spinner.gif' : '../../assets/spinner.gif')} alt="loading-icon" />
        ) : (
          <img
            src={require(darkMode ? '../../assets/spinner_dark.gif' : '../../assets/spinner_dark.gif')}
            alt="loading-icon"
          />
        )}
      </AnimatedImg>
    </Wrapper>
  )
}

export default LocalLoader
