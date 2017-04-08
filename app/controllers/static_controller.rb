class StaticController < ApplicationController
  def index
  end

  def start
  end

  def results
    @results = PotentialStorageCalculator.new(form_params)
    render partial: "results"
  end

  private

  def form_params
    params.require(:mine).permit(:name, :cart_num, :cart_weight, :track_length, :track_incline)
  end
end
