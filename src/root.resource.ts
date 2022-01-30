import { getDefaultRouter, serverStatusMiddleware } from '@naturalcycles/backend-lib'
import { service } from '@src/service'

const router = getDefaultRouter()
export const rootResource = router

router.get('/status', serverStatusMiddleware())

router.get('/', (req, res) => {
  res.send(service.getNextPage())
})

interface Post {
  imageUrl: string
  label: string
}

router.post('/post', (req, res) => {
  const { imageUrl, label } = req.body as Post

  service.recordLabel(imageUrl, label)

  res.send(service.getNextPage())
})
