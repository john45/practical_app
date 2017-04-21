class AddPositiontoitems < ActiveRecord::Migration
  def up
    add_column :items, :position, :integer
  end

  def down
    remove_column :items, :position
  end
end
