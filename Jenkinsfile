pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/B-Altaleb/MyWebAppRep.git'
            }
        }
        
        stage('Build') {
            steps {
                sh 'docker build -t bayanaltaleb/mywebapp:3.0 .' 
            }
        }
        
//        stage('Test') {
//            steps {
//                sh 'docker run bayanaltaleb/mywebapp:3.0 npm test' 
//            }
//        }
        
        stage('Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'bayan-docker-credentials', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    sh 'echo $DOCKER_PASSWORD | docker login --username $DOCKER_USERNAME --password-stdin'
                    sh 'docker push bayanaltaleb/mywebapp:3.0' 
                }
            }
        }
        
        stage('Deploy - port 5000') {
            steps {
                sh 'docker run -d -p 5000:80 bayanaltaleb/mywebapp:3.0'
            }
        }
//        stage('Deploy') {
//            steps {
//                sh 'kubectl apply -f deployment.yaml'
//            }
//        }
    }
}
