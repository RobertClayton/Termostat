require 'sinatra'
require 'sinatra/base'
require 'json'
require 'data_mapper'
require 'dm-postgres-adapter'
require 'dm-migrations'
require 'pg'
require_relative 'data'
require 'pry'

set :public_folder, proc { File.join(root) }

class SaveLoad < Sinatra::Base

  @@current_temperature = nil
  @@energy_usage = nil
  @@energy_mode = nil

  get '/load' do
    headers 'Access-Control-Allow-Origin' => '*'
    # { current_temperature: @@current_temperature.to_s,
    # energy_usage: @@energy_usage.to_s,
    # energy_mode: @@energy_mode.to_s }.to_json

    #binding.pry

    @recall_data = Thermostat.all
    Thermostat.last.to_json
  end

  post '/save' do
    headers 'Access-Control-Allow-Origin' => '*'
    @@current_temperature = params[:current_temperature].to_s
    @@energy_usage = params[:energy_usage]
    @@energy_mode = params[:energy_mode]



    Thermostat.create(current_temperature: @@current_temperature,
      energy_usage: @@energy_usage,
      energy_mode: @@energy_mode)
      # binding.pry
  end
end
