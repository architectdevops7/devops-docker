# Use a Maven image as the base image for building the application
FROM maven:3.8.4-openjdk-11-slim AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the pom.xml file to the container
COPY pom.xml .

# Download the project dependencies
RUN mvn dependency:go-offline

# Copy the source code to the container
COPY src/ ./src/

# Build the Maven project and package it as a WAR file
RUN mvn package -DskipTests

# Use a Tomcat image as the base image for running the application
FROM tomcat:9.0-jdk11-openjdk-slim

# Copy the WAR file from the builder stage to the Tomcat webapps directory
COPY --from=builder /app/target/*.war /usr/local/tomcat/webapps/

# Expose the default Tomcat port
EXPOSE 8080

# Start Tomcat and deploy the application
CMD ["catalina.sh", "run"]

