#!/bin/zsh

# jq='$HOME/dev/playground/jq/jq --join-output'


prefix='.daily.data[] | .'

columns=('time' 'summary' 'sunriseTime' 'sunsetTime' 'moonPhase' \
         'precipIntensity' 'precipIntensityMax' 'precipIntensityMaxTime' \
         'precipProbability' 'precipType' 'temperatureMin' 'temperatureMinTime' \
         'temperatureMax' 'humidity' 'windSpeed' 'visibility');

column_write () {
  cat "$1" | $HOME/dev/playground/jq/jq --join-output "$2" >> weather-daily.csv
  printf ',' >> weather-daily.csv
}

rm weather-daily.csv

find ./responses -name "*.json" |
while read filename; do
  for column in $columns; do
    column_write "$filename" "$prefix$column" |
    tr -d '^J'
  done
  printf '\n' >> weather-daily.csv
done
