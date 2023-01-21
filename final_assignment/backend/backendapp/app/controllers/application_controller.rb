class ApplicationController < ActionController::Base
    def home 
        render html: "HOME PAGE"
    end    
end
