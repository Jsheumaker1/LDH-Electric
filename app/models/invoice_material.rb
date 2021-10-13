class InvoiceMaterial < ApplicationRecord
  belongs_to :invoice
  belongs_to :material
end
