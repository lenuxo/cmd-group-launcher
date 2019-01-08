export default function find(_target: any, all: any[]) {
  let target = _target
  if (parseInt(target)) {
    target = parseInt(target)
  }
  if (typeof target == 'number') {
    return { group: all[target - 1], index: target - 1 }
  } else if (typeof target == 'string') {
    return {
      group: all.find(i => i.name == target),
      index: all.findIndex(i => i.name == target),
    }
  } else {
    throw new Error('wrong')
  }
}
