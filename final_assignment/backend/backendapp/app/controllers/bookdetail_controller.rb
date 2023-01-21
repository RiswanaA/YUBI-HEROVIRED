class BookdetailController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        render json: Bookdetail.all;
        end
    def show 
       
        v= Bookdetail.find(params[:id]) 
        render json: v
        
     end   
     
     
    def create
        
         Bookdetail.create(
             'bookname': params[:bookname],
             'author': params[:author], 
             'count': params[:count]                                                     
                                                            
             )
    end    
 
       
 
     def update 
         p = Bookdetail.find(params[:id].to_i)
         p.update('bookname': params[:bookname], 'author': params[:author], 'count': params[:count])
         render json: "Data is Updated"
     end
 
     def destroy
         p = Bookdetail.find(params[:id].to_i)
         p.destroy
     end    
 
 
end
