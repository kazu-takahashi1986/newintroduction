class Task < ApplicationRecord
  has_one_attached :image
  before_validation :set_nameless_name
  validates :name, presence: true

  scope :recent, -> { order(created_at: :desc) }

  private

  def set_nameless_name
    self.name = '名前なし' if name.blank?
  end
end
