#!/bin/zsh

if [ $# != 1 ]; then 
	echo "Usage: $0 NUM"
else
	echo "Generating Week $1 files..."
fi

cp -a template week$1

echo "Done"
