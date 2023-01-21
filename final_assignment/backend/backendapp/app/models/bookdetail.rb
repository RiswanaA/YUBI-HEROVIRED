class Bookdetail < ApplicationRecord
    validates :bookname, presence: true
    validates :author, presence: true
    validates :count, presence: true
    

end
