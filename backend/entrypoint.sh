#!/usr/bin/env bash
dockerize -wait tcp://mysql:3306 -timeout 60s
echo 'backend starting'
python manage.py runserver 0.0.0.0:8080