#!/usr/bin/env groovy
pipeline {
  agent any
  stages {
    stage('Pre-cleanup') {
      steps {
        sh 'rm -rf ./node_modules'
      }
    }
    stage('Install dependencies') {
      steps {
        sh '.  npm install'

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
