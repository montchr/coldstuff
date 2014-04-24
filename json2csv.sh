#!/bin/sh
# Convert all the JSON files in ./responses/ to CSV in ./csv/

for r in $(find ./responses/ -name "*.json"); do
  json2csv -i "$r" -o ./csv/$(basename "$r").csv -k daily.data -p
done
