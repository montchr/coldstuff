#!/bin/sh
# Concatenate weather data
cat responses/*.json | json -g > weather.json
