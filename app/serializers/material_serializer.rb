class MaterialSerializer < ActiveModel::Serializer
  attributes :id, :item, :price, :inventory_quantity
end
