namespace :add_positions do
  desc "add positions from id to positions"
  task puts_hello: :environment do
    items = Item.all
    items.each do |item|
      item.position = item.id
      item.save
    end
  end
end
