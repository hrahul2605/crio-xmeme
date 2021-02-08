#!/bin/bash

docker build -t xmeme_app .

docker run -d --net="host" xmeme_app