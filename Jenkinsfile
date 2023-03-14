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
               sh '''
               npm run test
               '''            

            }
        }
        
        stage('end'){
            steps{
                echo 'end of build'
            }
        }
    }
    post {

        always{
            slackSend( channel: "#test-slack-integration-to-jenkins", token: "ngsWlV84bSkzWA7flvU7E4IR", color: "good", message: "Test Pipeline Notifications")
        }

}

}
