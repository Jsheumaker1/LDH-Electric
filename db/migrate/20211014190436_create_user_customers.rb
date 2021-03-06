class CreateUserCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :user_customers do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :customer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
