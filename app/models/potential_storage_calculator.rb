class PotentialStorageCalculator
  def initialize(form_params)
    @cart_num = form_params[:cart_num].to_f
    @cart_weight = form_params[:cart_weight].to_f
    @track_length = form_params[:track_length].to_f
    @track_incline = form_params[:track_incline].to_f
    @state = form_params[:state]
  end

  attr_reader :state

  def kw_storage
    (joules_to_kw(joules) * efficiency).round(2)
  end

  def california_savings
    (kw_storage * 37.96).round(2)
  end

  def mass
    @cart_num * @cart_weight
  end

  def gravity
    9.8
  end

  def joules
    (mass * gravity * height).round(2)
  end

  def joules_to_kw(joules)
    joules * (1/3600000.00)
  end

  def efficiency
    0.8
  end

  def height
    (@track_length * Math.sin(radians).abs).round(2)
  end

  def radians
    @track_incline * Math::PI / 180 
  end
end
