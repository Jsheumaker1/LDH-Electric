class CustomersController < ApplicationController
    before_action only: [:show, :update, :destroy, :create]

    # GET /customers
    def index
        customers = Customer.all

        render json: customers
    end

    def create
        customer = Customer.new(customer_params)
    
        if customer.save
          render json: customer, status: :created
        else
          render json: customer.errors, status: :unprocessable_entity
        end
      end


    private
        def customer_params
            params.permit(:user_id, :customer_name, :phone, :address, :balance)
        end
end
