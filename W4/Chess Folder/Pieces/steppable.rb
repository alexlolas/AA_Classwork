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
end