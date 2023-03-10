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
        success {
            emailext attachLog: true, 
                body:
                    """
                    <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER})\'</b></p>
                    <p>
                    View console output at 
                    "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"
                    </p> 
                      <p><i>(Build log is attached.)</i></p>
                    """,
                subject: "Status: 'SUCCESS' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'", 
                to: 'franciskinyuru26@gmail.com'
        }
        failure {
            emailext attachLog: true, 
                body:
                    """
                    <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER})\'</b></p>
                    <p>
                    View console output at 
                    "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"
                    </p> 
                      <p><i>(Build log is attached.)</i></p>
                    """,
                subject: "Status: FAILURE -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'", 
                to: 'franciskinyuru26@gmail.com'
        }
}}