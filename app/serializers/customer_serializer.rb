class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :user, :phone, :address, :balance
end
