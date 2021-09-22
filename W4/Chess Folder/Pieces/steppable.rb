module Steppable
  def king
    arr = [
      [[self.pos[0] + 1], self.pos[1]], 
      [self.pos[0], [self.pos[1] + 1]], 
      [[self.pos[0] + 1], [self.pos[1] + 1]], 
      [[self.pos[0] + 1], [self.pos[1] - 1]], 
      [self.pos[0], [self.pos[1] - 1]],
      [[self.pos[0] - 1], [self.pos[1] - 1]],
      [[self.pos[0] - 1], self.pos[1]],
      [[self.pos[0] - 1], [self.pos[1] + 1]],
    ]

    valid_moves = []

    arr.each do |space|
      if (@board.grid[space[0]][space[1]].is_a?(NullPiece)) && @board.grid.valid_pos?(space)
        valid_moves << space
      elsif self.color != @board.grid[space[0]][space[1]].color && @board.grid.valid_pos?(space)
        valid_moves << space
      end
    end
    valid_moves
  end

  def knight
    arr = [
      [[self.pos[0] + 2], [self.pos[1] + 1]], 
      [[self.pos[0] + 1], [self.pos[1] + 2]], 
      [[self.pos[0] + 1], [self.pos[1] - 2]], 
      [[self.pos[0] - 2], [self.pos[1] - 1]], 
      [[self.pos[0] - 2], [self.pos[1] + 1]],
      [[self.pos[0] - 1], [self.pos[1] + 2]],
      [[self.pos[0] - 1], [self.pos[1] - 2]],
      [[self.pos[0] + 2], [self.pos[1] - 1]],
    ]

    valid_moves = []

    arr.each do |space|
      if (@board.grid[space[0]][space[1]].is_a?(NullPiece)) && @board.grid.valid_pos?(space)
        valid_moves << space
      elsif self.color != @board.grid[space[0]][space[1]].color && @board.grid.valid_pos?(space)
        valid_moves << space
      end
    end
    valid_moves

  end

  def pawn
    arr = []
    first_move_white = [[self.pos[0] + 1], self.pos[1]]
    double_move_white = [[self.pos[0] + 2], self.pos[1]]
    if @board[first_move_white] == NullPiece
      arr << [[self.pos[0] + 1], self.pos[1]]
    elsif (self.pos[0] == 1 && self.color == "white") && @board[double_move_white] == NullPiece
      arr << [[self.pos[0] + 2], self.pos[1]]
    end

    first_move_black = [[self.pos[0] - 1], self.pos[1]]
    double_move_black = [[self.pos[0] - 2], self.pos[1]]

    if @board[first_move_black] == NullPiece
      arr << [[self.pos[0] - 1], self.pos[1]]
    elsif (self.pos[0] == 6 && self.color == "black") && @board[double_move_black] == NullPiece
      arr << [[self.pos[0] - 2], self.pos[1]]
    end

    
  end

  def pawn_rest
    arr = [
      [[self.pos[0] + 1], self.pos[1]]
    ]

  end

  def move_dirs
    raise "Don't call me here"
  end
end