77.times do
  Fact.create(content: Faker::ChuckNorris.unique.fact)
end
