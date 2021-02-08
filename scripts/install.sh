#!bin/bash

sudo sh -y -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key -y add -

sudo apt-get -y update

sudo apt-get install -y wget ca-certificates build-essential

curl -sL https://deb.nodesource.com/setup_lts.x | sudo -y -E bash -
sudo apt-get install -y nodejs

sudo apt-get install -y postgresql postgresql-contrib

sudo systemctl start postgresql.service

sudo -u postgres createuser crio-hrahul2605

sudo -u postgres createdb XMeme

npm install --global yarn