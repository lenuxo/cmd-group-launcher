import { exec } from 'child_process'
const __root = require('app-root-path')
export default function runCmd(cmds: string[]) {
  cmds.forEach((cmd: string) => {
    if (cmd) {
      exec(`bash ${__root}/iterm.bash "clear&&\"${cmd.trim()}\""`)
    }
  })
}
