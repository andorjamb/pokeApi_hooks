pipeline {
  agent any
  tools {nodejs "Node"}

  stages {
    stage('Pre-cleanup') {
      steps {
        sh 'rm -rf ./node_modules'
    
      }
    }
    stage('build'){
      steps {
        echo 'running build stage, install packages'
        sh 'node --version'
        sh 'npm install'
      }
    }
/*     stage('Run tests') {
      steps {
        echo 'running tests...'
        sh 'npm test'
    
      }
    } */
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
