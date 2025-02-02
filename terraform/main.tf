resource "vercel_project" "scanphibian" {
  name      = "scanphibian"
  framework = "nextjs"
  git_repository = {
    type = "github"
    repo = "sawhney17/scanphibian"
  }
}

# Define a separate branch for the experiment
resource "vercel_deployment" "experiment_branch" {
  project_id   = vercel_project.scanphibian.id
  git_branch   = "experiment"
  alias        = "experiment.scanphibian.vercel.app"
}

# Traffic Splitting (50% Main, 50% Experiment)
resource "vercel_project_traffic_splitting" "split_test" {
  project_id = vercel_project.scanphibian.id

  rules {
    target = "main"
    weight = 50
  }

  rules {
    target = "experiment"
    weight = 50
  }
}