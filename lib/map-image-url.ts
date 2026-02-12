import { type Block } from 'notion-types'
import { defaultMapImageUrl } from 'notion-utils'

import { defaultPageCover, defaultPageIcon } from './config'

export const mapImageUrl = (url: string | undefined, block: Block) => {
  // Handle undefined/null URLs or blocks to prevent replaceAll error
  if (!url || !block) {
    return url
  }

  if (url === defaultPageCover || url === defaultPageIcon) {
    return url
  }

  // Ensure url is a non-empty string before calling defaultMapImageUrl
  if (typeof url === 'string' && url.trim().length > 0) {
    return defaultMapImageUrl(url, block)
  }

  return url
}
