#!/usr/bin/env node
import program from 'commander'
const DATA = {
  version: require('../package.json').version,
  description: 'Run commands in groups fast.',
}

const Options = [
  ['ls', '列出全部组全部命令'],
  ['ls <groupname>', '列出指定组内命令'],
  ['--config', '打开配置文件'],
]
program.version(DATA.version, '-v, --version').description(DATA.description)

// ls
program.command('ls <groupname>').action(groupname => {
  console.log(groupname)
})
program.parse(process.argv)
console.log('boom!')
