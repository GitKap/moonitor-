#!/bin/bash

echo Content-type: text/plain
echo

#TODO:
# IMPORTANT: prevent bash from throwing out all environment info when run without arguments

#Save old internal field separator.
OIFS="$IFS"

#Set field separator to & and parse the OUERY_STRING at the ampersand
IFS="${IFS}&"
set $QUERY_STRING
Args="$*"
IFS="$OIFS"


echo $0 $1 $2 $3
echo "--------"

for i in $Args ; do
	echo $0 $1 $2 $3
done

exit 0