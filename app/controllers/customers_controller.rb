class CustomersController < ApplicationController
    before_action only: [:show, :update, :destroy, :create]

    # GET /customers
    def index
        customers = Customer.all
        render json: customers
    end

    # POST /customers
    def create
        customer = Customer.new(customer_params)
          
        if customer.save
          render json: customer, status: :created
        else
          render json: customer.errors, status: :unprocessable_entity
        end
    end

    # PATCH/PUT /users/:id
    def update
      @customer = Customer.find(params[:id])
    
      if @customer
          @customer.update(update_customer_params)
          render json: @customer
      else
          render json: @customer.errors, status: :unprocessable_entity
      end
  end

  # DELETE /users/:id
  def destroy 
    customer = Customer.find_by_id(params[:id])
    
    customer.delete
  end

    private

    def customer_params
        params.permit(:user_id, :customer_name, :phone, :address, :balance)
    end

    def update_customer_params
      params[:updatedCustomer].permit(:customer_name, :phone, :address)
     end

end
