import program from 'commander'

export default function ls(groupname: any[] = []) {
  if (!groupname) {
    // 显示全部组
    console.log('list all')
  } else {
    // 显示指定组
    groupname.forEach(i => {
      console.log('list ' + i)
    })
  }
}
