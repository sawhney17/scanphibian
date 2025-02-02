terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.7.0"
    }
  }
}

provider "vercel" {
  api_token = var.vercel_api_token
}

# ✅ Define the main Vercel project
resource "vercel_project" "scanphibian" {
  name      = "scanphibian"
  framework = "nextjs"
  git_repository = {
    type = "github"
    repo = "sawhney17/scanphibian"
  }
}

# ✅ Create a second project for the experiment version
resource "vercel_project" "scanphibian_experiment" {
  name      = "scanphibian-experiment"
  framework = "nextjs"
  git_repository = {
    type = "github"
    repo = "sawhney17/scanphibian"
  }
}

# ✅ Define a custom domain for the main version
resource "vercel_project_domain" "main_domain" {
  project_id = vercel_project.scanphibian.id
  domain     = "scanphibian.vercel.app"
}

# ✅ Define a custom domain for the experiment version
resource "vercel_project_domain" "experiment_domain" {
  project_id = vercel_project.scanphibian_experiment.id
  domain     = "scanphibian-experiment.vercel.app"
}