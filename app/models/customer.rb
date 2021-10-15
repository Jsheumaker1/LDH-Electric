class Customer < ApplicationRecord
  belongs_to :user
  has_many :invoices
  has_many :user_customers
  has_many :users, through: :user_customers
end
