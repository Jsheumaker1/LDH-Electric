class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :customer_name, :phone, :address, :balance
  has_one :user
end
