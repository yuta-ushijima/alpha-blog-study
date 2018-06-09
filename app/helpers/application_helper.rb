module ApplicationHelper
  def gravatar_for(user, options = { size: 80 })
    gravatar_id = Digest::MD5::hexdigest(user.email.downcase)
    size = options[:size]
    gravatar_url = "https://secure.gravatar.com/avatar/#{gravatar_id}?s=#{size}"
    image_tag(gravatar_url, alt: user.username, class: "img-circle")
  end

  def prefered_color
    # return => ログインしているユーザーのcolorの値をreturnで返す。
    # if => 現在ログインしているユーザーかつ現在ログインしているユーザーが持っているcolorの値をpresent?メソッドで存在確認
    return current_user.color if (current_user && current_user.color.present?)
    '#fff' #デフォルトのカラーは白。ログアウトするとこのカラーが表示される。
  end
end
