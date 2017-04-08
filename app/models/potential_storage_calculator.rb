class PotentialStorageCalculator
  def initialize(form_params)
    @cart_num = form_params[:cart_num] 
    @cart_weight = form_params[:cart_weight] 
    @track_length = form_params[:track_length] 
    @track_incline = form_params[:track_incline]
  end

  def in_kwh
    @cart_num
  end
end
