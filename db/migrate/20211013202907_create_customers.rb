class CreateCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers do |t|
      t.belongs_tocustomer_name :user
      t.string :phone
      t.string :address
      t.integer :balance

      t.timestamps
    end
  end
end
