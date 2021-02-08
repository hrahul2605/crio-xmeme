#!/bin/bash

sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

sudo apt-get -y update

sudo apt-get install -y wget ca-certificates build-essential

curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

sudo apt-get install -y postgresql postgresql-contrib

/usr/lib/postgresql/10/bin/pg_ctl -D /var/lib/postgresql/10/main -l logfile start

sudo systemctl start postgresql.service

sudo -u postgres createuser crio-hrahul2605

sudo -u postgres createdb XMeme

npm install --global yarn