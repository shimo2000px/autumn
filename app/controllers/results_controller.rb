class ResultsController < ApplicationController
  def show
    @clicks = (params[:clicks] || 0).to_i

    if @clicks >= 70
      render :super_result
    elsif @clicks >= 60
      render :great_result
    elsif @clicks >= 50
      render :good_result
    elsif @clicks >= 40
      render :normal_result
    else
      render :show
    end
  end
end
