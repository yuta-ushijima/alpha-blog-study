class AddColorToUsers < ActiveRecord::Migration[5.1]
  def change
    # カラーコード指定のためにデータ型をtextに指定
    # stringを指定しないのは、HTMLコードなどにコンパイルされた際に
    # 255バイトでは足りなくなるため
    add_column :users, :color, :text
  end
end
