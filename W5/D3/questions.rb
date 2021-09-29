require 'sqlite3'
require 'singleton'

class QuestionsDatabase < SQLite3::Database 
   include Singleton

  def initialize 
    super('questions.db')
    self.type_translation = true   # all data you get back returned the same
    self.results_as_hash = true  # results given back as hash (column is key, value is the value(s) of the column)
  end
end

class Users 
  attr_accessor :fname, :lname, :id

  def self.find_by_id(id)
    row = QuestionsDatabase.instance.execute("SELECT * FROM users WHERE id=#{id}")
    data = row[0]
    Users.new(data)    
  end 

  def initialize(hash)
    @id = hash['id']
    @first_name = hash['fname']
    @last_name = hash['lname']
  end 
end


class Questions 
  attr_accessor :title, :body, :id

  def self.find_by_id(id)
    row = QuestionsDatabase.instance.execute("SELECT * FROM questions WHERE id=#{id}")
    data = row[0]
    Questions.new(data)    
  end 

  def self.find_by_author_id(author_id)
    row = QuestionsDatabase.instance.execute("SELECT * FROM questions WHERE user_id=#{author_id}")
    data = row[0]
    Questions.new(data)
  end

  def initialize(hash)
    @id = hash['id']
    @title = hash['title']
    @body = hash['body']
    @user_id = hash['user_id']
  end 
end

class QuestionFollows 
  attr_accessor :id, :user_id, :questions_id

  def self.find_by_id(id)
    row = QuestionsDatabase.instance.execute("SELECT * FROM question_follows WHERE id=#{id}")
    data = row[0]
    QuestionFollows.new(data)    
  end 

  def initialize(hash)
    @id = hash['id']
    @user_id = hash['users_id']
    @question_id = hash['questions_id']
  end 
end

class Replies
  def self.find_by_id(id)
    row = QuestionsDatabase.instance.execute("SELECT * FROM replies WHERE id=#{id}")
    data = row[0]
    Replies.new(data)    
  end

  def self.find_by_user_id(user_id)
    row = QuestionsDatabase.instance.execute("SELECT * FROM replies WHERE user_id=#{user_id}")
    array = []
    row.each do |ele|
    array << Replies.new(ele)
    end
    array
  end

  attr_accessor :id, :reply, :parent_reply, :question_id, :user_id
  def initialize(hash)
    @id = hash['id']
    @reply = hash['reply']
    @parent_reply = hash['parent_reply_id']
    @question_id = hash['question_id']
    @user_id = hash['user_id']
  end 

end 

class QuestionLikes
  def self.find_by_id(id)
    row = QuestionsDatabase.instance.execute("SELECT * FROM question_likes WHERE id=#{id}")
    data = row[0]
    QuestionLikes.new(data)    
  end

  attr_accessor :id, :user_id, :question_id
  def initialize(hash)
  @id = hash['id']
  @user_id = hash['user_id']
  @question_id = hash['question_id']
  end

end 

