Rails.application.routes.draw do
  root "top#index"
  get "games", to: "games#show"
  get "result", to: "results#show"
  get "usage", to: "usage#show"

  # get "up" => "rails/health#show", as: :rails_health_check
end
