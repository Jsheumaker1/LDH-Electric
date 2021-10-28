class UsersController < ApplicationController
    before_action  only: [:show, :update, :create, :destroy]

     # GET /users
    def index
        @users = User.all

        render json: @users
    end

    # GET /users/:id
    def userid 
        user = User.find(params[:id])
        render json: @user
    end

   # POST /signup
    def create
        newUser = User.new(user_params)

        if newUser.save
            render json:newUser
            session[:user_id] = newUser.id
        else
            render json: {errors: newUser.errors.full_messages}
        end
    end

   # PATCH/PUT /users/:id
    def update
        @user = User.find(params[:id])
        if @user
            @user.update(update_user_params)
            render json: @user
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end

    # DELETE /users/:id
    def destroy 
        user = User.find_by_id(params[:id])
        session.delete(:user_id)
        user.delete
    end

    private

        # Only allow a list of trusted parameters through.
        def user_params
            params.permit(:name, :username, :email, :password)
        end 

        def update_user_params
            params[:updatedUser].permit(:name, :username, :email, :password)
        
        end
        

end
