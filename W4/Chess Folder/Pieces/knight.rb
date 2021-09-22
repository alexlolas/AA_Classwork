require_relative "piece"
require_relative "steppable"

class Knight < Piece
  include Steppable
  def initialize(color, board, pos)
    super(color, board, pos)
  end
end