PracticalApp::Application.routes.draw do
  get '/' => 'items#index'
  root to: 'items#index'
  post '/items/sorting' => 'items#sorting'
  resources :items
end
