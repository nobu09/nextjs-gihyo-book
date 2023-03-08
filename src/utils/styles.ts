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
  theme?: AppTheme,
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
            theme,
          )}`,
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
          theme,,
        )};`
        result.push(`@media screen and (min-width: ${breakpoint}) {${style}}`)
      }
    }
    return result.join('\n')
  }
  return `${propKey}: ${toThemeValueIfNeeded(propKey, prop, theme)};`
}
