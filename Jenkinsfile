pipeline {
  agent {
      node {
      label 'node'
    }
  }
  stages {
    stage('Pre-cleanup') {
      steps {
        sh 'rm -rf ./node_modules'
        sh 'echo cleaning up....'
      }
    }
    stage('Run tests') {
      steps {
        sh 'echo run testing stage....'
      }
    }
  }
  post {
    failure {
      echo 'Processing failed'
    }
    success {
      echo 'Processing succeeded'
    }
  }
}
