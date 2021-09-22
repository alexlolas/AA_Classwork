# require_relative "knight_king"
# require_relative "null_piece"
# require_relative "pawn"
# require_relative "rook_bishop_queen"

require "byebug"
module Slidable
  def horizontal
    hor = []
    row = self.pos[0]
    
    @board.grid[row].each do |space| 
      if space.is_a?(NullPiece)
        hor << space
      end
    end
    hor
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
    diag = []
    row_idx = self.pos[0]
    col_idx = self.pos[1]
    until row_idx == 7 || col_idx == 7
      diag << [row_idx, col_idx]
      row_idx += 1
      col_idx += 1
    end

     until row_idx == 0 || col_idx == 0
      diag << [row_idx, col_idx]
      row_idx -= 1
      col_idx -= 1
    end
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
  def initialize(color, board, pos)
    @color = color
    @pos = pos
    @board = board
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