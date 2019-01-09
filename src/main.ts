#!/usr/bin/env node
import pm from 'commander'
import { ls, config, select } from './cmds'
import init from './cmds/oprConfig'
import os from 'os'

let DATA: { path: string; list: any[] }
let configPath = os.homedir() + '/f.config.json'
const main = async function() {
  DATA = await init(configPath)
  pm.version(require('../package.json').version, '-v, --version')
    .description('Run commands in groups fast.')
    .usage('[command] [group-name/index ...]')

  pm.command('c')
    .alias('config')
    .description('Open config file.')
    .action(() => {
      config(configPath, DATA)
    })
  pm.command('l [groupnames...]')
    .alias('list')
    .description(
      'List all/specific groups with containing commands. (group name or index number)'
    )
    .action(groupnames => {
      ls(DATA.list, groupnames)
    })
  pm.command('* [groupnames...]')
    .description('Run specific groups of commands.')
    .action(groupnames => {
      select(DATA.list, groupnames)
    })
  if (process.argv.length < 3) {
    select(DATA.list, [])
  }
  pm.on('--help', () => {
    console.log('')
    console.log('Examples:')
    console.log(`f`)
    console.log(`f mygroup`)
    console.log(`f mygroup1 mygroup2`)
  })
  pm.parse(process.argv)
}
main()
