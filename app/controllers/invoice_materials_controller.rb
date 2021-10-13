class InvoiceMaterialsController < ApplicationController
  before_action :set_invoice_material, only: [:show, :update, :destroy]

  # GET /invoice_materials
  def index
    @invoice_materials = InvoiceMaterial.all

    render json: @invoice_materials
  end

  # GET /invoice_materials/1
  def show
    render json: @invoice_material
  end

  # POST /invoice_materials
  def create
    @invoice_material = InvoiceMaterial.new(invoice_material_params)

    if @invoice_material.save
      render json: @invoice_material, status: :created, location: @invoice_material
    else
      render json: @invoice_material.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /invoice_materials/1
  def update
    if @invoice_material.update(invoice_material_params)
      render json: @invoice_material
    else
      render json: @invoice_material.errors, status: :unprocessable_entity
    end
  end

  # DELETE /invoice_materials/1
  def destroy
    @invoice_material.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_invoice_material
      @invoice_material = InvoiceMaterial.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def invoice_material_params
      params.require(:invoice_material).permit(:invoice_id, :material_id, :quantity, :total)
    end
end
