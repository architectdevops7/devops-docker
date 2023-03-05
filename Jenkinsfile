pipeline {
    agent any
    environment {
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-credentials-id')
        // REMOTE_HOST = 'remote-host'
        // REMOTE_USER = 'remote-user'
        // REMOTE_PASSWORD = credentials('remote-host-password-id')
    }
    stages {
        stage('Clone repository') {
            steps {
                git 'https://github.com/architectdevops7/docker-repo.git'
            }
        }
        stage('Build and tag image') {
            steps {
                script {
                    def image = docker.build("architectdevops7/webapp:${env.BUILD_ID}")
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials-id') {
                        image.push()
                    }
                    sh "docker tag architectdevops7/webapp:${env.BUILD_ID} architectdevops7/webapp:latest"
                }
            }
        }
        // stage('Deploy to remote host') {
        //     steps {
        //         withCredentials([usernamePassword(credentialsId: 'remote-host-password-id', usernameVariable: 'REMOTE_USER', passwordVariable: 'REMOTE_PASSWORD')]) {
        //             sshagent(['remote-host-credentials-id']) {
        //                 sh "ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST} 'docker pull yourusername/your-image-name:latest && docker stop your-container-name && docker rm your-container-name && docker run -d --name=your-container-name -p 80:80 yourusername/your-image-name:latest'"
        //             }
        //         }
        //     }
        // }
        stage('Push image to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials-id') {
                        docker.image("architectdevops7/webapp:${env.BUILD_ID}").push()
                        docker.image("architectdevops7/webapp:latest").push()
                    }
                }
            }
        }
    }
}

