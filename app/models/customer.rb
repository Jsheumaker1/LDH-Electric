class Customer < ApplicationRecord
  belongs_to :user
  has_many :invoices
  has_many :user_customers
  has_many :users, through: :user_customers

  def balance
    
    invoices = Invoice.where(customer_id: self.id)
    
    totals= invoices.map{|invoice| [invoice.payment_status, invoice.grand_total]
              if invoice.payment_status
                balance=0
              else
                invoice.grand_total
              end
              }

      totals.sum
  end

end
