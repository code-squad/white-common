#!/bin/zsh

FILE=1-1.md
if [ $# -eq 2 ]; then 
	DIR = $2
	FILE = $1
else
	num=($(ls | grep week | sort -r | head -1 | grep -o '[0-9]'))
	DIRNAME=week$(expr $num + 1)
fi

cp -a template $DIRNAME
mv $DIRNAME/sample.md $DIRNAME/$FILE

echo "Done"
