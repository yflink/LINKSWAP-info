import React from 'react'
import styled from 'styled-components'
import { RowFixed, RowBetween } from '../Row'
import { useMedia } from 'react-use'
import { useGlobalData, useEthPrice, useLinkPrice, useYflPrice, useSYflPrice, useYflusdPrice } from '../../contexts/GlobalData'
import { formattedNum, localNumber } from '../../utils'

import { TYPE } from '../../Theme'

const Header = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
`

const Medium = styled.span`
  font-weight: 500;
`

export default function GlobalStats() {
  const below1295 = useMedia('(max-width: 1295px)')
  const below1180 = useMedia('(max-width: 1180px)')
  const below1024 = useMedia('(max-width: 1024px)')
  const below400 = useMedia('(max-width: 400px)')
  const below816 = useMedia('(max-width: 816px)')

  const { oneDayVolumeUSD, oneDayTxns, pairCount } = useGlobalData()
  const [ethPrice] = useEthPrice()
  const [linkPrice] = useLinkPrice()
  const [yflPrice] = useYflPrice()
  const [syflPrice] = useSYflPrice()
  const [yflusdPrice] = useYflusdPrice()
  const formattedEthPrice = ethPrice ? formattedNum(ethPrice, true) : '-'
  const formattedLinkPrice = linkPrice ? formattedNum(linkPrice, true) : '-'
  const formattedYflPrice = yflPrice ? formattedNum(yflPrice, true) : '-'
  const formattedSYflPrice = syflPrice ? formattedNum(syflPrice, true) : '-'
  const formattedYflUsdPrices = yflusdPrice ? formattedNum(yflusdPrice, true) : '-'
  const oneDayFees = oneDayVolumeUSD ? formattedNum(oneDayVolumeUSD * 0.003, true) : ''

  return (
    <Header>
      <RowBetween style={{ padding: below816 ? '0.5rem' : '.5rem' }}>
        <RowFixed>
          {!below400 && (
            <TYPE.main mr={'1rem'}>
              ETH Price: <Medium>{formattedEthPrice}</Medium>
            </TYPE.main>
          )}

          {!below400 && (
            <TYPE.main mr={'1rem'}>
              LINK Price: <Medium>{formattedLinkPrice}</Medium>
            </TYPE.main>
          )}

          {!below400 && (
            <TYPE.main mr={'1rem'}>
              YFL Price: <Medium>{formattedYflPrice}</Medium>
            </TYPE.main>
          )}

          {!below400 && (
            <TYPE.main mr={'1rem'}>
              YFLUSD Price: <Medium>{formattedYflUsdPrices}</Medium>
            </TYPE.main>
          )}

          {!below400 && (
            <TYPE.main mr={'1rem'}>
              sYFL Price: <Medium>{formattedSYflPrice}</Medium>
            </TYPE.main>
          )}

          {!below1180 && (
            <TYPE.main mr={'1rem'}>
              Transactions (24H): <Medium>{localNumber(oneDayTxns)}</Medium>
            </TYPE.main>
          )}
          {!below1024 && (
            <TYPE.main mr={'1rem'}>
              Pairs: <Medium>{localNumber(pairCount)}</Medium>
            </TYPE.main>
          )}
          {!below1295 && (
            <TYPE.main mr={'1rem'}>
              Fees (24H): <Medium>{oneDayFees}</Medium>&nbsp;
            </TYPE.main>
          )}
        </RowFixed>
      </RowBetween>
    </Header>
  )
}
