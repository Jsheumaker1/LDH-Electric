class InvoiceSerializer < ActiveModel::Serializer
  attributes :id, :invoice_number, :date, :decription, :subtotal, :tax, :grand_total, :payment_status, :payment_type, :payment_number
  has_one :customer
end
