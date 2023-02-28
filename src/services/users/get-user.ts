import type { ApiContext, User } from 'types'
import { fetcher } from 'utils'

export type GetUserParamas = {
  /**
   * ユーザーID
   */
  id: number
}
