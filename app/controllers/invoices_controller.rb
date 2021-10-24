class InvoicesController < ApplicationController
    before_action only: [:show, :update, :destroy]


    # GET /invoices/:id
    def customer_invoices 
        invoices = Invoice.find_by(customer_id: params[:id])
        render json: [invoices]
    end
end