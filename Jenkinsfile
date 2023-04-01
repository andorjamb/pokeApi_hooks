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
      }
    }
    stage('Run tests') {
      steps {
        sh '. npm test'
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
