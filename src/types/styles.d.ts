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

// Themeの型
type AppTheme = typeof theme
// Tyemeのキーの型
type SpaceThemeKeys = keyof typeof theme.space
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
