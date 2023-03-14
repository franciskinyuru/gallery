pipeline{
    agent any
    tools{
        nodejs "node"
    }
    
    stages{
        stage('Start'){
            steps{
                echo 'build has started'
            }
        }
        stage('clone repository'){
            steps{
                git url: 'https://github.com/franciskinyuru/gallery.git', branch: 'master'
            }
        }
          stage('install depedencies'){
            steps{
               sh '''
               npm install
               '''            

            }
        }
        stage('run tests'){
            steps{
               sh 'npm test'
            }
        }
        stage('end'){
            steps{
                sh '''
                echo "end of build"

                '''
            }
        }
    }
    post {

        always{
              slackSend channel: 'test-slack-integration-to-jenkins',  color: '#c0c0c0', message: "Repo: ${env.JOB_NAME} - BuildNo: ${env.BUILD_NUMBER} - live site: ${Live_Site}"
        }

}

}
