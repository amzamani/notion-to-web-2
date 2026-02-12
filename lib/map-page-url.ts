import { type ExtendedRecordMap } from 'notion-types'
import { parsePageId, uuidToId } from 'notion-utils'

import { includeNotionIdInUrls } from './config'
import { getCanonicalPageId } from './get-canonical-page-id'
import { type Site } from './types'

// include UUIDs in page URLs during local development but not in production
// (they're nice for debugging and speed up local dev)
const uuid = !!includeNotionIdInUrls

export const mapPageUrl =
  (site: Site, recordMap: ExtendedRecordMap, searchParams: URLSearchParams) =>
    (pageId = '') => {
      try {
        if (!pageId || typeof pageId !== 'string') {
          return createUrl('/', searchParams)
        }

        const pageUuid = parsePageId(pageId, { uuid: true })

        if (!pageUuid) {
          return createUrl('/', searchParams)
        }

        if (uuidToId(pageUuid) === site.rootNotionPageId) {
          return createUrl('/', searchParams)
        } else {
          return createUrl(
            `/${getCanonicalPageId(pageUuid, recordMap, { uuid })}`,
            searchParams
          )
        }
      } catch (err) {
        console.warn('mapPageUrl error:', pageId, err)
        return createUrl('/', searchParams)
      }
    }

export const getCanonicalPageUrl =
  (site: Site, recordMap: ExtendedRecordMap) =>
    (pageId = '') => {
      try {
        if (!pageId || typeof pageId !== 'string') {
          return `https://${site.domain}`
        }

        const pageUuid = parsePageId(pageId, { uuid: true })

        if (!pageUuid) {
          return `https://${site.domain}`
        }

        if (uuidToId(pageId) === site.rootNotionPageId) {
          return `https://${site.domain}`
        } else {
          return `https://${site.domain}/${getCanonicalPageId(pageUuid, recordMap, {
            uuid
          })}`
        }
      } catch (err) {
        console.warn('getCanonicalPageUrl error:', pageId, err)
        return `https://${site.domain}`
      }
    }

function createUrl(path: string, searchParams: URLSearchParams) {
  return [path, searchParams.toString()].filter(Boolean).join('?')
}
