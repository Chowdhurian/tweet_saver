class AddTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.references :user
      t.timestamps null: false
    end
  end
end
