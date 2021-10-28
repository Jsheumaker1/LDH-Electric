class CreateCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :customer_name
      t.string :phone
      t.string :address
      t.float :balance

      t.timestamps
    end
  end
end
