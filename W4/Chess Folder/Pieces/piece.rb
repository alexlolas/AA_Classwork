# require_relative "knight_king"
# require_relative "null_piece"
# require_relative "pawn"
# require_relative "rook_bishop_queen"
module Slidable
  def horizontal

  end

  def vertical 

  end

  def diagonal 

  end

end

module Stepable
  def step

  end
end
class Piece
  attr_reader :color, :board,
  attr_accessor :moves, :pos
  def initialize(color, board, pos)
    @color = color
    @pos = pos
    @board = board
    @moves = []
  end

  def moves

  end
end