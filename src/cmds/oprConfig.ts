import fs from 'fs-extra'
import chalk from 'chalk'
import os from 'os'
const log = console.log

export default async function init() {
  let path = os.homedir() + '/f.config.json'
  let newData = {
    list: [
      {
        name: 'group 1',
        cmd: [`echo "I am command 1."`, `echo "I am command 2."`],
      },
    ],
    path: path,
  }
  try {
    const data = await fs.readJSON(path)
    return { list: data.list, path: path }
  } catch (err) {
    if (err.code == 'ENOENT') {
      log(chalk.yellow(`配置文件不存在`))
      try {
        await fs.writeJSON(path, newData)
        log(chalk.green(`已创建新配置文件: ${path}`))
        // process.exit(1)
      } catch (err) {
        log(
          chalk.inverse.red('[!]'),
          chalk.inverse.red(`无法创建配置文件\n请手动创建: ${path}`)
        )
        process.exit(1)
      }
    } else {
      log(
        chalk.inverse.red('[!]'),
        chalk.inverse.red(`读取配置文件错误: ${path}`)
      )
      process.exit(1)
    }
    return newData
  }
}
