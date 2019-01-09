import inquirer from 'inquirer'
import find from './findGroup'
import chalk from 'chalk'
import runCmd from './runCmd'

export default function select(totalList: any[], groups: any | undefined) {
  if (groups[0]) {
    let targetGroups: any[] = []
    groups.forEach((name: string) => {
      targetGroups.push(find(name, totalList).group)
    })
    targetGroups.forEach(group => {
      if (group) {
        runCmd(group.cmd)
        console.log(chalk.green('[√] ' + group.name + ' 已启动'))
      } else {
        console.log(chalk.red('[x] 不存在'))
      }
    })
    process.exit(0)
  } else {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'target',
          message: '选择要启动的组',
          choices: totalList.map((item, index) => `${item.name}`),
        },
      ])
      .then((answer: any) => {
        let cmds = find(answer.target, totalList).group.cmd
        runCmd(cmds)
        console.log(chalk.green('[√] ' + answer.target + ' 已启动'))
        process.exit(0)
      })
  }
}
