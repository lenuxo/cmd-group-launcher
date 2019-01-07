#!/usr/bin/env node
import pm from 'commander'
import { ls, config, select, error } from './cmds'

const DATA = {
  version: require('../package.json').version,
  description: 'Run commands in groups fast.',
}
pm.version(DATA.version, '-v, --version').description(DATA.description)

pm.arguments('[opts] [groups...]')
  .action((opts: string | undefined, groups: any[] | undefined) => {
    switch (opts) {
      case 'c':
      case 'config':
        config()
        break
      case 'l':
      case 'ls':
      case 'list':
        ls(groups)
        break
      default:
        select([opts, ...groups])
        break
    }
  })
  .parse(process.argv)
