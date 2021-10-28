class CreateInvoiceMaterials < ActiveRecord::Migration[6.1]
  def change
    create_table :invoice_materials do |t|
      t.belongs_to :invoice, null: false, foreign_key: true
      t.belongs_to :material, null: false, foreign_key: true
      t.float :quantity
      t.float :total

      t.timestamps
    end
  end
end
