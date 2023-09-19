class AddColumnArtist < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :artist, :string,  null: false
  end
end
