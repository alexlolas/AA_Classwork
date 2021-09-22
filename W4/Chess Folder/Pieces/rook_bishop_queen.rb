require_relative "piece"
class RookBishopQueen < Piece
  include Slidable
  attr_reader :color, :board, :pos
  def initialize(color, grid, pos)
    # @color = color
    # @board = board
    # @pos = pos
    super(color, grid, pos)
  end
end