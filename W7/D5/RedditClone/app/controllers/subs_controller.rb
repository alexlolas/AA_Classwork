class SubsController < ApplicationController

  def index
    @subs = Sub.all
    render :index
  end

  def show
    @sub = Sub.find(params[:id])
    render :show
  end

  def new
    @sub = Sub.new
    render :new
  end

  def create
    @sub = Sub.new(sub_params)
    if @sub.save
      redirect_to sub_url(@sub.id)
    else
      flash.now[:errors] = ["Invalid title"]
      render :new
    end
  end

  def edit
    @sub = Sub.find(params[:id])
    if current_user.id == @sub.moderator_id
      render :edit
    else
      flash.now[:errors] = ["Only moderator for this sub can edit"]
      redirect_to sub_url(@sub.id)
    end
  end

  def sub_params
    params.require(:sub).permit(:title, :description)
  end




end
