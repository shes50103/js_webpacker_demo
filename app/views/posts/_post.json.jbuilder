json.extract! post, :id, :body, :name, :created_at, :updated_at
json.url post_url(post, format: :json)
