#!/usr/bin/env node
import pm from 'commander'
import { ls, config, select, error } from './cmds'
import init from './cmds/oprConfig'

let DATA: { path: string; list: any[] }

const main = async function() {
  DATA = await init()
  pm.version(require('../package.json').version, '-v, --version').description(
    'Run commands in groups fast.'
  )
  pm.arguments('[opts] [groups...]')
    .action((opts: string | undefined, groups: any[] | undefined) => {
      switch (opts) {
        case 'c':
        case 'config':
          config(DATA)
          break
        case 'l':
        case 'ls':
        case 'list':
          ls(DATA.list,groups)
          break
        default:
          // TODO:
          select([opts, ...groups])
          break
      }
    })
    .parse(process.argv)
}
main()
