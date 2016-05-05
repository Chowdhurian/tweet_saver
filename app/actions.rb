# Homepage (Root path)
get '/' do
  erb :index
end

get '/tweets' do
  Tweet.all.to_json
end
