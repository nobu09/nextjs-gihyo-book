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
type FontSizeThemeKeys = keyof typeof theme.fontSizes

// Themeのキーの型（SpaceThemeKeys）もしくは任意の文字列（'10px'など）
type Space = SpaceThemeKeys | (string & {}) // &{}を書くとエディタの補完が効くようになる

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
  // 実装省略
}
