import program from 'commander'

export default function select(groups: any | undefined) {
  if (groups) {
    console.log('f' + groups)
  } else {
    console.log('f')
  }
}
