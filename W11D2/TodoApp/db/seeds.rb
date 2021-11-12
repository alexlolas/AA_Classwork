# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  Todo.destroy_all

  first_todo = Todo.create!(title: "This is first todo", body: "First Body", done: false)
  second_todo = Todo.create!(title: "This is second todo", body: "second Body", done: false)
  third_todo = Todo.create!(title: "This is third todo", body: "third Body", done: false)
  fourth_todo = Todo.create!(title: "This is fourth todo", body: "fourth Body", done: false)

end