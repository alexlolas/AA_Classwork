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
      if (@board.grid[space[0]][space[1]].is_a?(NullPiece)) && ((space[0] > 0 && space[1] > 0) && (space[0] < 8 && space[1] < 8))
        valid_moves << space
      elsif self.color != @board.grid[space[0]][space[1]].color && ((space[0] > 0 && space[1] > 0) && (space[0] < 8 && space[1] < 8))
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
      if (@board.grid[space[0]][space[1]].is_a?(NullPiece)) && ((space[0] > 0 && space[1] > 0) && (space[0] < 8 && space[1] < 8))
        valid_moves << space
      end
    end
    valid_moves

  end
end