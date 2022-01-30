import { _Memo } from '@naturalcycles/js-lib'
import { requireEnvKeys } from '@naturalcycles/nodejs-lib'
import { page } from '@src/page'
import { labeledDir, unlabeledDir } from '@src/paths'
import * as fs from 'fs-extra'

class Service {
  async bootstrap(): Promise<void> {
    const labels = this.getLabels()
    console.log({ labels })

    fs.ensureDirSync(labeledDir)
    fs.ensureDirSync(unlabeledDir)

    const names = fs.readdirSync(unlabeledDir)
    console.log(`unlabeled: ${names.length}`)

    labels.forEach(label => {
      fs.ensureDirSync(`${labeledDir}/${label}`)

      const names = fs.readdirSync(`${labeledDir}/${label}`)
      console.log(`${label}: ${names.length}`)
    })
  }

  @_Memo()
  getLabels(): string[] {
    const { LABELS } = requireEnvKeys('LABELS')
    return LABELS.split(',')
  }

  getNextPage(): string {
    const names = fs.readdirSync(unlabeledDir)
    const [imageUrl] = names

    if (!imageUrl) {
      return `Done! No more images in "unlabeled" folder!`
    }

    return page(names.length, imageUrl, this.getLabels())
  }

  recordLabel(imageUrl: string, label: string): void {
    const input = `${unlabeledDir}/${imageUrl}`

    // skip if input not found
    // Useful if doing e.g "form resubmission" in the browser
    if (!fs.pathExistsSync(input)) return

    fs.moveSync(input, `${labeledDir}/${label}/${imageUrl}`, {
      overwrite: true,
    })
  }
}

export const service = new Service()
