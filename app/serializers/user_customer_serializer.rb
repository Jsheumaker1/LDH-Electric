class UserCustomerSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :customer
end
