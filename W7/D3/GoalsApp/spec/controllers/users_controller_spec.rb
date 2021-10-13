require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe "GET #index" do
    it "renders the user's index" do
      # allow(subject).to receive(:logged_in?).and_return(true)
      get :index
      expect(response).to render_template(:index)
    end
  end

end
