const {NodeSSH} = require('node-ssh')
const ssh = new NodeSSH()

function start() {
  ssh.connect({
    host: process.env.REMOTE_HOST,
    username: process.env.REMOTE_USER,
    password: process.env.REMOTE_PWD
  }).then(function (){
    ssh.putDirectory("site/", process.env.REMOTE_PATH)
    ssh.dispose()
    console.log('done')
  })
}

start()