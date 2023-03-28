/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import Box, { BoxProps } from 'components/layout/Box'
import type {
  CSSPropertyGridArea,
  CSSPropertyGridAutoFlow,
  CSSPropertyGridColumn,
  CSSPropertyGridRow,
  Responsive,
} from 'types/styles'
import { toPropValue } from 'utils/styles'

type GridProps = BoxProps & {
  gridGap?: Responsive<string>
  gridColumnGap?: Responsive<string>
  gridRowGap?: Responsive<string>
  gridColumn?: Responsive<CSSPropertyGridColumn>
  gridRow?: Responsive<CSSPropertyGridRow>
  gridAutoFlow?: Responsive<CSSPropertyGridAutoFlow>
  gridAutoColumns?: Responsive<string>
  gridAutoRows?: Responsive<string>
  gridTemplateColumns?: Responsive<string>
  gridTemplateRows?: Responsive<string>
  gridTemplateAreas?: Responsive<CSSPropertyGridArea>
  gridArea?: Responsive<string>
}
