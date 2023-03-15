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
        stage('clone repository from github'){
            steps{
                git url: 'https://github.com/franciskinyuru/gallery.git', branch: 'master'
            }
        }
          stage('install dependencies'){
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
        stage('end of build'){
            steps{
                sh '''
                echo "end of build"

                '''
            }
        }
    }
    post {

        success{
           slackSend channel: '#test-slack-integration-to-jenkins',  color: '#c0c0c0', message: "Repo: ${env.JOB_NAME} - BuildNo: ${env.BUILD_NUMBER} - live site: ${env.Live_Site}"
        }

        always {
            emailext body: "RepoName-: ${env.JOB_NAME} - BuildNo: ${env.BUILD_NUMBER} - live site: ${env.Live_Site}",
    recipientProviders: [developers(), requestor()],
    subject: 'Test Subject',
    to: 'waruikinyuru@gmail.com'
        }

}

}
