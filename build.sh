#!/bin/bash
source ~/.bashrc

nvm install 16
nvm use v16
npm install -g yarn
yarn
yarn build