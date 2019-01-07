import program from 'commander'
export default function error() {
  program.on('command:*', function() {
    console.error(
      'Invalid command: %s\nSee --help for a list of available commands.',
      program.args.join(' ')
    )
    process.exit(1)
  })
}
