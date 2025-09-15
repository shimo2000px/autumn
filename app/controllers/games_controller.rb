class GamesController < ApplicationController
  def index
  end

  def show
  @clicks = params[:clicks].to_i

  @result = case @clicks
            when 0..9 then "タンクトップ👕"
            when 10..19 then "セーター🧶"
            else "コート🧥"
            end
  end
end
