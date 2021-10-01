class AddEnrollmentIdToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :enrollments_id, :integer, null: false
  end
end
