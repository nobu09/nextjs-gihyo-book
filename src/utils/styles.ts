/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import type { ResponsiveProp, Responsive } from 'types'
import { theme } from 'themes'

// Themeの型
type AppTheme = typeof theme

// Tyemeのキーの型
type SpaceThemeKeys = keyof typeof theme.space
type ColorThemeKeys = keyof typeof theme.colors
type FontSizeThemeKeys = keyof typeof theme.fontSizes
type LetterSpacingThemeKeys = keyof typeof theme.letterSpacings
type LineHeightThemeKeys = keyof typeof theme.lineHeights

// Themeのキーの型（SpaceThemeKeys）もしくは任意の文字列（'10px'など）
type Space = SpaceThemeKeys | (string & {}) // &{}を書くとエディタの補完が効くようになる
type Color = ColorThemeKeys | (string & {})
type FontSize = FontSizeThemeKeys | (string & {})
type LetterSpacings = LetterSpacingThemeKeys | (string & {})
type LineHeight = LineHeightThemeKeys | (string & {})

// ブレークポイント
const BREAKPOINTS: { [key: string]: string } = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
}

/**
 * Responsive 型を CSS プロパティとその値に変換
 * @param propKey CSS プロパティ
 * @param prop Responsive型
 * @param theme AppTheme
 * @returns CSS プロパティとその値（ex.background-color:white;）
 */
function toPropValue<T>(
  propKey: string,
  prop?: Responsive<T>,
  theme?: AppTheme
): string {
  if (prop === undefined) return undefined

  if (isResponsivePropType(prop)) {
    const result = []
    for (const responsiveKey in prop) {
      if (responsiveKey === 'base') {
        // デフォルトのスタイル
        result.push(
          `${propKey}: ${toThemeValueIfNeeded(
            propKey,
            prop[responsiveKey],
            theme
          )}`
        )
      } else if (
        responsiveKey === 'sm' ||
        responsiveKey === 'md' ||
        responsiveKey === 'lg' ||
        responsiveKey === 'xl'
      ) {
        const breakpoint = BREAKPOINTS[responsiveKey]
        const style = `${propKey}: ${toThemeValueIfNeeded(
          propKey,
          prop[responsiveKey],
          theme
        )};`
        result.push(`@media screen and (min-width: ${breakpoint}) {${style}}`)
      }
    }
    return result.join('\n')
  }
  return `${propKey}: ${toThemeValueIfNeeded(propKey, prop, theme)};`
}

const SPACE_KEYS = new Set([
  'margin',
  'margin-top',
  'margin-left',
  'margin-bottom',
  'margin-right',
  'padding',
  'padding-top',
  'padding-left',
  'padding-bottom',
  'padding-right',
])

const COLOR_KEYS = new Set(['color', 'background-color'])
const FONT_SIZE_KEYS = new Set(['fond-size'])
const LINE_SPACING_KEYS = new Set(['letter-spacing'])
const LINE_HEIGHT_KEYS = new Set(['line-height'])

/**
 * Themeに指定されたCSSプロパティの値に変換
 * @param propKey CSSプロパティ
 * @param prop Responsive型
 * @param theme AppTheme
 * @return CSSプロパティとその値（ex. background-color: white;)
 */
function toThemeValueIfNeeded<T>(propKey: string, value: T, theme?: AppTheme) {
  if (
    theme &&
    theme.space &&
    SPACE_KEYS.has(propKey) &&
    isSpaceThemeKeys(value, theme)
  ) {
    return theme.space[value]
  } else if (
    theme &&
    theme.colors &&
    COLOR_KEYS.has(propKey) &&
    isColorThemeKeys(value, theme)
  ) {
    return theme.colors[value]
  } else if (
    theme &&
    theme.fontSizes &&
    FONT_SIZE_KEYS.has(propKey) &&
    isFontSizeThemeKeys(value, theme)
  ) {
    return theme.fontSizes[value]
  } else if (
    theme &&
    theme.letterSpacings &&
    LINE_SPACING_KEYS.has(propKey) &&
    isLetterSpacingThemeKeys(value, theme)
  ) {
    return theme.letterSpacings[value]
  } else if (
    theme &&
    theme.lineHeights &&
    LINE_HEIGHT_KEYS.has(propKey) &&
    isLineHeightThemeKeys(value, theme)
  ) {
    return theme.lineHeights[value]
  }
}
