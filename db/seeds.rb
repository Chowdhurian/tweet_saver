# populate db with 5 real tweets

# require_relative '../config/environment'

search_obj = @client.search("#ruby -rt", lang: "en").to_a

for i in 0..4 do
  Tweet.create(
    screen_name: search_obj[i].user.screen_name,
    text: search_obj[i].text,
    url: search_obj[i].url.display_uri.to_s
  )
end
