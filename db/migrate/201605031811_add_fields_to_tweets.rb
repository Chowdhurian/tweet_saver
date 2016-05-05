class AddFieldsToTweets < ActiveRecord::Migration
  def change
    change_table :tweets do |t|
      t.string :screen_name
      t.string :text
      t.string :url
    end
  end
end
