module Slidable
  def horizontal
    hor = []
    row = self.pos[0]
    
    @board.grid[row].each do |space| 
      if space.is_a?(NullPiece) || self.color != space.color
        hor << space
      end
    end
    hor
  end

  def vertical 
    vert = []
    trans = @board.transpose
    col = self.pos[1]
    trans.grid[col].each do |space| 
      if space.is_a?(NullPiece) || self.color != space.color
        vert << space
      end
    end
    vert
  end

  def diagonal 
    diag = []
    row_idx = self.pos[0]
    col_idx = self.pos[1]
    until row_idx == 7 || col_idx == 7
      if @board.grid[row_idx][col_idx].is_a?(NullPiece) || self.color != @board.grid[row_idx][col_idx].color
        diag << [row_idx, col_idx]
      end
      row_idx += 1
      col_idx += 1
    end

    until row_idx == 0 || col_idx == 0
      if @board.grid[row_idx][col_idx].is_a?(NullPiece) || self.color != @board.grid[row_idx][col_idx].color
        diag << [row_idx, col_idx]
      end
      row_idx -= 1
      col_idx -= 1
    end
    diag
  end
end