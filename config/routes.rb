NsaSnowden::Application.routes.draw do
  root :to => 'sightings#index'
  resources :sightings, only: [:show]
end
 