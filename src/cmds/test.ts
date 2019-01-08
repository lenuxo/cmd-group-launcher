import { exec } from 'child_process'
const __root = require('app-root-path')
export default function test() {
  exec('bash ' + __root + '/iterm.bash')
  exec('bash ' + __root + '/iterm.bash pwd')
}
