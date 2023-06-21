# docker-repo

# Troubleshoot the application
1. To check the Maven build output and verify if the WAR file is generated:

docker run --rm -v /path/to/your/project:/app -w /app maven:3.8.4-openjdk-11-slim mvn package -DskipTests

This command runs the Maven build process inside a temporary Docker container and prints the output to the console. 
Replace /path/to/your/project with the actual path to your project directory.

2. To inspect the contents of the app/target directory and check if the WAR file exists:

docker run --rm -v /path/to/your/project:/app -w /app maven:3.8.4-openjdk-11-slim ls -l target

This command lists the files in the target directory inside the Docker container.
Make sure to replace /path/to/your/project with the actual path to your project directory.



 
