class CreateBookdetail < ActiveRecord::Migration[7.0]
  def change
    create_table :bookdetails do |t|
      t.string :bookname
      t.string :author
      t.string :count
      t.timestamps
    end
  end
end
