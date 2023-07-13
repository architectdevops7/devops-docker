terraform {
  backend "s3" {
    bucket = "architectdevops7"
    region = "us-east-1"
    key = "jenkins-server/terraform.tfstate"
  }
}