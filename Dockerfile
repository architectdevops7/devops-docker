FROM maven:3.9.0-jdk-11-slim AS builder
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src/ ./src/
RUN mvn package -DskipTests

FROM tomcat:9.0.72-jdk11-openjdk-slim
COPY --from=builder /app/target/*.war /opt/apache-tomcat-9.0.72/webapps