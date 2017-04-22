class Item < ActiveRecord::Base
  attr_accessible :done, :name, :position
  default_scope -> { order('position asc')}
end
