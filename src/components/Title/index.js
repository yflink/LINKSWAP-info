import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Flex } from 'rebass'
import Link from '../Link'
import { RowFixed } from '../Row'
import Logo from '../../assets/logo.png'

const TitleWrapper = styled.div`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  z-index: 10;
`

const HeaderText = styled.div`
  margin-left: 0.75rem;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0.06em;
  display: inline-box;
  display: -webkit-inline-box;
  opacity: 0.8;
  color: ${({ theme }) => theme.white};
`

const LinkswapIcon = styled(Link)`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-180deg);
  }
`

export default function Title() {
  const history = useHistory()

  return (
    <TitleWrapper onClick={() => history.push('/')}>
      <Flex alignItems="center">
        <RowFixed>
          <LinkswapIcon id="link" onClick={() => history.push('/')}>
            <img width={'24px'} src={Logo} alt="logo" />
          </LinkswapIcon>
          <HeaderText>LINKSWAP</HeaderText>
        </RowFixed>
      </Flex>
    </TitleWrapper>
  )
}
