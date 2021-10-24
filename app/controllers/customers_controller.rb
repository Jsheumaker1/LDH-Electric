class CustomersController < ApplicationController
    before_action only: [:show, :update, :destroy]

    # GET /customers
    def index
        customers = Customer.all

        render json: customers
    end

end
