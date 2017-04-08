Rails.application.routes.draw do
  root 'static#index'
  get '/start', to: 'static#start', as: 'start'
  post '/results', to: 'static#results'
 # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
