class PotentialStorageCalculator
  def initialize(form_params)
    @cart_num = form_params[:cart_num].to_f
    @cart_weight = form_params[:cart_weight].to_f
    @track_length = form_params[:track_length].to_f
    @track_incline = form_params[:track_incline].to_f
  end

  def in_kwh
    p "mass: #{mass}, height: #{height} "
    joules_to_kw(joules) * efficiency
  end

  def mass
    @cart_num * @cart_weight
  end

  def gravity
    9.8
  end

  def joules
    mass * gravity * height
  end

  def joules_to_kw(joules)
    joules * (1/3600000.00)
  end

  def efficiency
    0.8
  end

  def height
    @track_length * Math.sin(radians).abs
  end

  def radians
    @track_incline * Math::PI / 180 
  end
end
