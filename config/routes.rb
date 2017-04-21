PracticalApp::Application.routes.draw do
  get '/' => 'items#index'
  root to: 'items#index'
  resources :items
end
