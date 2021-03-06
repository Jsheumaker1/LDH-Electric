Rails.application.routes.draw do
  resources :invoice_materials
  resources :materials
  resources :invoices, only: [:index]
  resources :user_customers
  resources :customers, only: [:index]
  resources :users, only: [:index]
  
  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  delete '/login', to: 'sessions#destroy'
  delete '/users/:id', to: 'users#destroy'
  get '/users/:id', to: 'users#userid'
  patch 'users/:id', to: 'users#update'
  get '/invoices/:id', to: 'invoices#customer_invoices'
  post '/customers', to: 'customers#create'
  patch 'customers/:id', to: 'customers#update'
  delete '/customers/:id', to: 'customers#destroy'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get "/hello", to: "application#hello_world"
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
