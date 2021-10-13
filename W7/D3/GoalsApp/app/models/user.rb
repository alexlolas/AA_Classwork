class User < ApplicationRecord
  attr_reader :password

  after_initialize :ensure_session_token

  validates :username, presence: true, uniqueness: true
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true 

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  
private
  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end


end
