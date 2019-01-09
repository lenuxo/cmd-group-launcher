import program from 'commander'
import chalk from 'chalk'

export default function error() {
  program.on('command:*', function() {
    console.error(
      chalk.inverse.red(
        `Invalid command: ${program.args.join(
          ' '
        )}\nSee --help for a list of available commands.`
      )
    )
    process.exit(1)
  })
  // TODO: 未知option的错误提示
  program.on('option:*', function() {
    console.error(
      chalk.inverse.red(
        `Invalid option: ${program.args.join(
          ' '
        )}\nSee --help for a list of available commands.`
      )
    )
    process.exit(1)
  })
}
