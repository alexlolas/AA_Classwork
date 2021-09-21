class Board
  def initialize 
    @board = Array.new(8) {Array.new(8)}

  end

  def board_setup
    @board[0][0] << RookBishopQueen.new
    @board[0][1] << KnightKing.new
    @board[0][2] << RookBishopQueen.new
    @board[0][3] << RookBishopQueen.new
    @board[0][4] << KnightKing.new
    @board[0][5] << RookBishopQueen.new
    @board[0][6] << KnightKing.new
    @board[0][7] << RookBishopQueen.new

    @board[7][0] << RookBishopQueen.new
    @board[7][1] << KnightKing.new
    @board[7][2] << RookBishopQueen.new
    @board[7][3] << KnightKing.new 
    @board[7][4] << RookBishopQueen.new
    @board[7][5] << RookBishopQueen.new
    @board[7][6] << KnightKing.new
    @board[7][7] << RookBishopQueen.new

    @board[1][0..7].each {|space| space << Pawn.new}
    @board[6][0..7].each {|space| space << Pawn.new}
  end
end