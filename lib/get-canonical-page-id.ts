import { type ExtendedRecordMap } from 'notion-types'
import {
  getCanonicalPageId as getCanonicalPageIdImpl,
  parsePageId
} from 'notion-utils'

import { inversePageUrlOverrides } from './config'

export function getCanonicalPageId(
  pageId: string,
  recordMap: ExtendedRecordMap,
  { uuid = true }: { uuid?: boolean } = {}
): string | undefined {
  try {
    if (!pageId || typeof pageId !== 'string' || !recordMap) {
      return undefined
    }

    const cleanPageId = parsePageId(pageId, { uuid: false })
    if (!cleanPageId) {
      return undefined
    }

    const override = inversePageUrlOverrides[cleanPageId]
    if (override) {
      return override
    } else {
      return (
        getCanonicalPageIdImpl(pageId, recordMap, {
          uuid
        }) ?? undefined
      )
    }
  } catch (err) {
    console.warn('getCanonicalPageId error:', pageId, err)
    return undefined
  }
}
