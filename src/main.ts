#!/usr/bin/env node
import pm from 'commander'
import { ls, config, select } from './cmds'
import init from './cmds/oprConfig'
import os from 'os'

let DATA: { path: string; list: any[] }
let configPath = os.homedir() + '/f.config.json'
const main = async function() {
  DATA = await init(configPath)
  pm.version(require('../package.json').version, '-v, --version').description(
    'Run commands in groups fast.'
  )
  // TODO: 设置帮助信息
  pm.arguments('[opts] [groups...]')
    .action((opts: string | undefined, groups: any[] | undefined) => {
      switch (opts) {
        case 'c':
        case 'config':
          config(configPath, DATA)
          break
        case 'l':
        case 'ls':
        case 'list':
          ls(DATA.list, groups)
          break
        default:
          // TODO:
          select(DATA.list, [opts, ...groups])
          break
      }
    })
    .parse(process.argv)
}
main()
