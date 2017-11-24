require 'data_mapper'
require 'dm-postgres-adapter'
require 'dm-migrations'
require 'pg'

class Thermostat
  include DataMapper::Resource

  property :id,               Serial
  property :current_temperature,  Text
  property :energy_usage,  Text
  property :energy_mode,  Text
end

DataMapper.setup(:default, "postgres://localhost/thermostat")
DataMapper.finalize
DataMapper.auto_upgrade!
