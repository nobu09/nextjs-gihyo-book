/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import Box, { BoxProps } from 'components/layout/Box'
import type {
  Responsive,
  CSSPropertyAlignItems,
  CSSPropertyAlignContent,
  CSSPropertyJustifyContent,
  CSSPropertyJustifyItems,
  CSSPropertyFlexDirection,
  CSSPropertyJustifySelf,
  CSSPropertyFlexWrap,
  CSSPropertyAlignSelf,
} from 'types/styles'
import { toPropValue } from 'utils/styles'

type FlexProps = BoxProps & {
  alignItems?: Responsive<CSSPropertyAlignItems>
  alignContent?: Responsive<CSSPropertyAlignContent>
  justifyContent?: Responsive<CSSPropertyJustifyContent>
  justifyItems?: Responsive<CSSPropertyJustifyItems>
  flexWrap?: Responsive<CSSPropertyFlexWrap>
  flexBasis?: Responsive<string>
  flexDirection?: Responsive<CSSPropertyFlexDirection>
  flexGrow?: Responsive<string>
  flexShrink?: Responsive<string>
  justifySelf?: Responsive<CSSPropertyJustifySelf>
  alignSelf?: Responsive<CSSPropertyAlignSelf>
  order?: Responsive<string>
}
