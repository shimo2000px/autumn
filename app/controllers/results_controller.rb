class ResultsController < ApplicationController
  def show
    @clicks = (params[:clicks] || 0).to_i

    if @clicks >= 75
      render :super
    elsif @clicks >= 60
      render :great
    elsif @clicks >= 50
      render :good
    elsif @clicks >= 40
      render :normal
    else
      render :show
    end
  end
end
