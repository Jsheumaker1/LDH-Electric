class Material < ApplicationRecord
    has_many :invoice_materials
    has_many :materials, through: :invoice_materials
end
