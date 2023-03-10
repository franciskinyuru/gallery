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

        stage('checkout to test branch'){
            steps{
               sh '''
               git checkout test
               '''            

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
}