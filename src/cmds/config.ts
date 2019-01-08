import chalk from 'chalk'
import { exec } from 'child_process'

export default function config(DATA: any) {
  exec(`open ${DATA.path}`, err => {
    if (err) {
      console.log(
        chalk.inverse.red('[!]'),
        chalk.inverse.red(`无法打开配置文件`)
      )
      throw err
    } else {
      console.log(chalk.green('已打开配置文件: '), DATA.path)
    }
  })
}
