# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ldh = User.create!(name:"Lonnie", username: "ldhelectric", email: "ldhelectric@gmail.com", password: "Moweaqua1")
test1 = User.create!(name:"test", username: "test", email: "test@gmail.com", password: "test1")

puts "seed Users"

dougmorrell= Customer.create!(user_id:ldh.id, customer_name:"Doug Morrell", phone: "2175558585", address: "610 E Warren, Moweaqua, IL 62550", balance: 0)
trenthorton= Customer.create!(user_id:test1.id, customer_name:"Trent Horton", phone: "2175555858", address: "225 W Main St, Moweaqua, IL 62550", balance: 0 )

puts "seed Customers"

invoice1 = Invoice.create!(invoice_number: "1", customer_id:dougmorrell.id, date: '10/01/21', description: 'Changed light switches in garage', subtotal: 36, tax: 3.24, grand_total:39.24, payment_status: false, payment_type: " ", payment_number: "")
invoice2 = Invoice.create!(invoice_number: "2", customer_id:dougmorrell.id, date: '10/06/21', description: 'Put new fans in house', subtotal:525, tax: 47.25, grand_total:572.25, payment_status: false, payment_type: " ", payment_number: "")
invoice3 = Invoice.create!(invoice_number: "3", customer_id:trenthorton.id, date: '10/16/21', description: 'Put new light switches in the house', subtotal:46, tax: 4.14, grand_total:50.14, payment_status: true, payment_type: " ", payment_number: "")
invoice4 = Invoice.create!(invoice_number: "4", customer_id:trenthorton.id, date: '10/20/21', description: 'Put new light switches in the garage', subtotal:18, tax: 1.62, grand_total:19.62, payment_status: false, payment_type: " ", payment_number: "")

puts "seed Invoices"

labor= Material.create!(item: "labor", price: 20, inventory_quantity: 10000000)
light_switch = Material.create!(item: "light_switch", price: 4, inventory_quantity: 30)
fan = Material.create!(item: "fan", price: 85, inventory_quantity: 15)

puts "seed Materials"

invoice_1_materials = InvoiceMaterial.create!(invoice_id:invoice1.id, material_id: light_switch.id, quantity:4, total:16)
invoice_1_labor = InvoiceMaterial.create!(invoice_id:invoice1.id, material_id: labor.id, quantity:1, total:20)
invoice_2_materials = InvoiceMaterial.create!(invoice_id:invoice2.id, material_id: fan.id, quantity:5, total:425)
invoice_2_labor = InvoiceMaterial.create!(invoice_id:invoice2.id, material_id: labor.id, quantity:5, total:100)
invoice_3_materials = InvoiceMaterial.create!(invoice_id:invoice3.id, material_id: light_switch.id, quantity:4, total:16)
invoice_3_labor = InvoiceMaterial.create!(invoice_id:invoice3.id, material_id: labor.id, quantity:1.5, total:30)
invoice_4_materials = InvoiceMaterial.create!(invoice_id:invoice4.id, material_id: light_switch.id, quantity:2, total:8)
invoice_4_labor = InvoiceMaterial.create!(invoice_id:invoice4.id, material_id: labor.id, quantity:0.5, total:10)

puts "seed InvoiceMaterials"



