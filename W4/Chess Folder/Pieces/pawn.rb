require_relative "piece"

class Pawn < Piece
  def initialize(color, grid, pos)
    super(color, grid, pos)
  end
end