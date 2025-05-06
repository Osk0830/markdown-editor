import { marked } from 'marked'
import * as sanitizeHtml from 'sanitize-html'

const worker = self as any;

worker.addEventListener('message', async (event) => {
  const text = event.data
  const parsed = await marked.parse(text)
  const html = sanitizeHtml(parsed, { allowedTags: [...sanitizeHtml.defaults.allowedTags, 'h1', 'h2'] })
  worker.postMessage({ html })
});

