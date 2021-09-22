# require_relative "knight_king"
# require_relative "null_piece"
# require_relative "pawn"
# require_relative "rook_bishop_queen"


module Slidable
  def horizontal
    hor = []
    row = self.pos[0]
    @grid[row].each do |space| 
      if space.is_a?(NullPiece)
        hor << space
      end
    end
  end

  def vertical 
    vert = []
    trans = @grid.transpose
    col = self.pos[1]
    trans[col].each do |space| 
      if space.is_a?(NullPiece)
        vert << space
      end
    end
  end

  def diagonal 

  end

end

module Stepable
  def step

  end
end


class Piece
  include(Slidable)
  attr_reader :color, :grid
  attr_accessor :moves, :pos
  def initialize(color, grid, pos)
    @color = color
    @pos = pos
    @grid = grid
    @moves = []
  end

  def moves

  end
end


#  idx = self.pos[1]
#     while idx < 7
#       if @grid[self.pos[0]][idx] is_a?(NullPiece)
#         hor << [self.pos[0], idx]
#       else
#         break
#       end
#       idx += 1
#     end