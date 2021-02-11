#!/bin/bash

sudo docker build -t xmeme_app ..

sudo docker run -d --net="host" xmeme_app
