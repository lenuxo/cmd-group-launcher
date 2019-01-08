import program from 'commander'

// TODO: 选择界面
export default function select(groups: any | undefined) {
  if (groups) {
    console.log('f' + groups)
  } else {
    console.log('f')
  }
}
