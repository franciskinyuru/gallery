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
        // stage('run tests'){
        //     steps{
        //        sh '''
        //        npm run test
        //        '''            

        //     }
        // }
        
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
              slackSend  color: 'good', message: "Destroy Applied ${env.JOB_NAME} - ${env.BUILD_NUMBER} live site ${Live_Site}"
        }

}

}
