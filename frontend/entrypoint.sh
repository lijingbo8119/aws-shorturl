#!/usr/bin/env bash
dockerize -wait tcp://mysql:3306 -timeout 60s
echo 'frontend run npm install'
npm install
echo 'frontend npm run start'
npm run start