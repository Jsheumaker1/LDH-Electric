class InvoiceSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :invoice_number, :date, :description, :subtotal, :tax, :grand_total, :payment_status, :payment_type, :payment_number
  has_one :customer
end
