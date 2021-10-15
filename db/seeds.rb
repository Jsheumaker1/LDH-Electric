# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ldh = User.create(name:"Lonnie", username: "ldhelectric", email: "ldhelectric@gmail.com", password: "Moewaqua1")
test1 = User.create(name:"test", username: "test", email: "test@gmail.com", password: "test1")


dougmorrell= Customer.create(user:ldh, customer_name:"Doug Morrell", phone: "2175558585", address: "610 E Warren, Moweaqua, IL 62550", balance: 0)
trenthorton= Customer.create(user:test1, customer_name:"Trent Horton", phone: "2175555858", address: "225 W Main St, Moweaqua, IL 62550", balance: 0)


invoice1 = Invoice.create(invoice_number: "1", customer:dougmorrell, date: '10/01/21', description: 'Changes light switches in garage', subtotal: 36, tax: 3.24, grand_total:39.24, payment_status: false, payment_type: " ", payment_number: "")
invoice2 = Invoice.create(invoice_number: "2", customer:dougmorrell, date: '10/06/21', description: 'Put new fans in house', subtotal:525, tax: 47.25, grand_total:572.25, payment_status: false, payment_type: " ", payment_number: "")
invoice3 = Invoice.create(invoice_number: "3", customer:trenthorton, date: '10/16/21', description: 'Put new light switches in the house', subtotal:0, tax: 0, grand_total:0, payment_status: false, payment_type: " ", payment_number: "")


labor= Material.create(item: "labor", price: 20, inventory_quantity: 10000000)
light_switch = Material.create(item: "light_switch", price: 4, inventory_quantity: 30)
fan = Material.create(item: "fan", price: 85, inventory_quantity: 15)


invoice_1_materials = InvoiceMaterial.create(invoice:invoice1, material: light_switch, quantity:4, total:16)
invoice_1_labor = InvoiceMaterial.create(invoice:invoice1, material: labor, quantity:1, total:20)
invoice_2_materials = InvoiceMaterial.create(invoice:invoice2, material: fan, quantity:5, total:425)
invoice_2_labor = InvoiceMaterial.create(invoice:invoice2, material: labor, quantity:5, total:100)
invoice_3_materials = InvoiceMaterial.create(invoice:invoice3, material: light_switch, quantity:2, total:8)
invoice_3_labor = InvoiceMaterial.create(invoice:invoice3, material: labor, quantity:0.5, total:10)


