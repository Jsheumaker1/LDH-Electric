class User < ApplicationRecord
    has_many :customers
    has_many :user_customers
    has_many :customers, through: :user_customers

    validates :username, presence: true, uniqueness: true
    
    has_secure_password
end
