/* global memodiary */
export default () => {
  const {
    commithash,
    dirty,
    time
  } = memodiary.build

  console.log(
    'Version %s built %s',
    commithash +
  (dirty ? '+' : ''),
    Date(time).toString()
  )
}
