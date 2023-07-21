#!/bin/bash

# Busca el ID del proceso de npm
npm_process_id=$(ps aux | grep '[n]pm' | awk '{print $2}')

if [ -n "$npm_process_id" ]; then
  # Detiene el proceso de npm
  echo "Deteniendo el proceso de npm con ID: $npm_process_id"
  kill $npm_process_id
else
  echo "No se encontró ningún proceso de npm en ejecución."
fi
