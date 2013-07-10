class SightingsController < ApplicationController
  def index
  	@sighting = Sighting.all
  end

  def show
  	@sighting = Sighting.find(params[:id])
  end
end