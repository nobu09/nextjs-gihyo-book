/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import type { Responsive } from 'types/styles'
import { toPropValue, Color, Space } from 'utils/styles'

// Box がとりうるプロパティを列挙
export type BoxProps = {
  color?: Responsive<Color>
  backgroudColor?: Responsive<Color>
  width?: Responsive<string>
  height?: Responsive<string>
  minWidth?: Responsive<string>
  minHeight?: Responsive<string>
  display?: Responsive<string>
  border?: Responsive<string>
  overflow?: Responsive<string>
  margin?: Responsive<Space>
  marginTop?: Responsive<Space>
  marginRight?: Responsive<Space>
  marginBotoom?: Responsive<Space>
  marginLeft?: Responsive<Space>
  padding?: Responsive<Space>
  paddingTop?: Responsive<Space>
  paddingRight?: Responsive<Space>
  paddingBottom?: Responsive<Space>
  paddingLeft?: Responsive<Space>
}

/**
 * Box コンポーネント
 * レイアウトの調整に利用する
 * ${(props) => toPropValue('color', props.color, props.theme)}
 */
const Box = styled.div<BoxProps>``

export default Box
