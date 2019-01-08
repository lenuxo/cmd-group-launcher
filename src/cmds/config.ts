import chalk from 'chalk'
import execa from 'execa'

export default async function config(configPath: string, DATA: any) {
  try {
    await execa(`open`, [configPath])
    console.log(chalk.green('已打开配置文件: '), configPath)
  } catch (err) {
    console.log(chalk.inverse.red('[!]'), chalk.inverse.red(`无法打开配置文件`))
    throw err
  }
}
