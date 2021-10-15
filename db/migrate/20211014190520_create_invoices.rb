class CreateInvoices < ActiveRecord::Migration[6.1]
  def change
    create_table :invoices do |t|
      t.belongs_to :customer, null: false, foreign_key: true
      t.integer :invoice_number
      t.string :date
      t.text :decription
      t.integer :subtotal
      t.integer :tax
      t.integer :grand_total
      t.boolean :payment_status
      t.string :payment_type
      t.string :payment_number

      t.timestamps
    end
  end
end
