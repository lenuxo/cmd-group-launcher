import chalk from 'chalk'
import find from './findGroup'
const log = console.log
export default function ls(totalList: any[], groupname: any[] | undefined) {
  if (!groupname || !groupname.length) {
    printAll(totalList)
  } else {
    groupname.forEach(i => {
      let one = find(i, totalList)
      if (one.group) {
        oneGroup(one.group, one.index)
      } else {
        log(chalk.inverse.gray('[x]'), chalk.gray('该组不存在: ' + i))
      }
    })
  }
}

function printAll(totalList: any[]) {
  if (!totalList.length) {
    log(chalk.inverse.gray('[x]'), chalk.gray('无'))
  } else {
    totalList.forEach((group, index) => oneGroup(group, index))
  }
}

function oneGroup(group: { cmd: []; name: string }, index: number) {
  log(chalk.inverse.blue(`[${index + 1}]`), chalk.blue(group.name))
  if (group.cmd.length) {
    group.cmd.forEach((cmd: string[], i: number) => {
      let before = i < group.cmd.length - 1 ? '├──' : '└──'
      log(before, cmd.toString())
    })
  } else {
    log('└─', chalk.gray('无'))
  }
}

// group:{name:string,cmd:[]}
