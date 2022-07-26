#!/usr/bin/env bash
dockerize -wait tcp://mysql:3306 -timeout 60s
echo 'frontend starting'
ls
echo $(pwd)
# npm install
# npm run dev
npm run start