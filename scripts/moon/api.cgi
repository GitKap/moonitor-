#!/bin/bash

echo Content-type: text/plain
echo

#********************************************************
#API-providing cgi script for web app
#	
#	TODO
#		- jsonparser
#			cpu_cores
#			cpu_model
#			
#			
#			
#		close api	
#			cut all special characters from arguments	
#			(create user group)
#			
#	
#	
#
#********************************************************



#Save old internal field separator.
OIFS="$IFS"

#Set field separator to & and parse the OUERY_STRING at the ampersand
IFS="${IFS}&"
set $QUERY_STRING
Args="$*"
IFS="$OIFS"


#echo $# $1 $2 $3 $4 $5
#echo "----------"

##todo - shift all arguments << 1

case $1 in
	jsonparser )
		shift
		./json-parser-outputtest.sh $@
		;;
esac