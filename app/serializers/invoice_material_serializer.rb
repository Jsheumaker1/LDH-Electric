class InvoiceMaterialSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :total
  has_one :invoice
  has_one :material
end
