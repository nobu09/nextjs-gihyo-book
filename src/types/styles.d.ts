import { theme } from 'themes'

/**
 * Responsive プロパティ
 * CSS プロパティの値をブレークポイントごとに設定できる
 * T はCSS プロパティの値の型
 */
export type ResponsiveProp<T> = {
  base?: T // デフォルト
  sm?: T // 640px 以上
  md?: T // 768px 以上
  lg?: T // 1024px 以上
  xl?: T // 1280px 以上
}

/**
 * Responsive 型は Responsive プロパティ もしくは CSS プロパティの値
 */
export type Responsive<T> = T | ResponsiveProp<T>

/**
 * Flex
 */
type SelfPosition =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'self-end'
  | 'self-start'
  | 'start'

type ContentPosition = 'center' | 'end' | 'flex-end' | 'flex-start' | 'start'

type ContentDistribution =
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch'

type CSSPropertyGlobals =
  | '-moz-initial'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'

export type CSSPropertyAlignItems =
  | CSSPropertyGlobals
  | SelfPosition
  | 'baseline'
  | 'normal'
  | 'stretch'
  // コードの自動補完
  | (string & {})

export type CSSPropertyAlignContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'start'
  | 'baseline'
  | 'normal'
  | (string & {})

export type CSSPropertyJustifyItems =
  | CSSPropertyGlobals
  | SelfPosition
  | 'baseline'
  | 'left'
  | 'legacy'
  | 'normal'
  | 'right'
  | 'stretch'
  | (string & {})

export type CSSPropertyJustifyContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | ContentPosition
  | 'left'
  | 'normal'
  | 'right'
  | (string & {})

export type CSSPropertyFlexWrap =
  | CSSPropertyGlobals
  | 'nowrap'
  | 'wrap'
  | 'wrap-reverse'

export type CSSPropertyFlexDirection =
  | CSSPropertyGlobals
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse'

export type CSSPropertyJustifySelf =
  | CSSPropertyGlobals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'left'
  | 'normal'
  | 'right'
  | 'stretch'
  | (string & {})

export type CSSPropertyAlignSelf =
  | CSSPropertyGlobals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'normal'
  | 'stretch'
  | (string & {})

/**
 * Grid
 */
type GridLine = 'auto' | (string & {})

export type CSSPropertyGridColumn =
  | CSSPropertyGlobals
  | GridLine
  | (string & {})

export type CSSPropertyGridRow = CSSPropertyGlobals | GridLine | (string & {})

export type CSSPropertyGridAutoFlow =
  | CSSPropertyGlobals
  | 'column'
  | 'dense'
  | 'row'
  | (string & {})

export type CSSPropertyGridArea = CSSPropertyGlobals | GridLine | (string & {})
