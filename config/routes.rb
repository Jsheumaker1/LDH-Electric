Rails.application.routes.draw do
  resources :invoice_materials
  resources :materials
  resources :invoices
  resources :user_customers
  resources :customers
  resources :users, only: [:index]
  
  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  delete '/login', to: 'sessions#destroy'
  delete '/users/:id', to: 'users#destroy'
  get '/users/:id', to: 'users#userid'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get "/hello", to: "application#hello_world"
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
