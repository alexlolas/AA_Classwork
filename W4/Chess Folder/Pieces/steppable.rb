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

  end

  def knight

  end
end