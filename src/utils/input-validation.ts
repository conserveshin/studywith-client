export const isAnyUndefined = (...args: any[]) => (
  args.reduce<boolean>(
    (prev, current, _index, _arr) => {
      return prev || (current !== undefined ? true : false)
    }, false
  )
)