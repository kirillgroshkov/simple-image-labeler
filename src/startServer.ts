/* tslint:disable:ordered-imports */
console.log('startServer... ')

import 'tsconfig-paths/register'
import { startServer } from '@naturalcycles/backend-lib'
import { pHang } from '@naturalcycles/js-lib'
import { runScript } from '@naturalcycles/nodejs-lib'
import { rootResource } from '@src/root.resource'
import { service } from '@src/service'
import express = require('express')
require('dotenv').config()

runScript(async () => {
  await service.bootstrap()

  await startServer({
    resources: [
      {
        path: '/',
        handler: rootResource,
      },
    ],
    handlers: [express.static('images')],
  })

  await pHang() // keep server running
})
