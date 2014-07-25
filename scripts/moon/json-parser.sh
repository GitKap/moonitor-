#!/bin/bash

#echo Content-type: text/plain
#echo

#Save old internal field separator.
#OIFS="$IFS"

#Set field separator to & and parse the OUERY_STRING at the ampersand
#IFS="${IFS}&"
#set $QUERY_STRING
#Args="$*"
#IFS="$OIFS"



echo $0 $1 $2 $3
echo "--------"



#spr. ilosci argumentow
if [ $# -lt 1 ]
	then
	echo "Za mało paramerów"
	exit
fi

#echo "Liczba argumentow: "
#echo $#

#declare OUTPUT=$(./cpu-info.sh)
#echo "$OUTPUT"


echo -en "{ " > temp.file
for (( i=1; i<=$#; i++ ))
do
	cmdTEMP="bash ${!i}"
	cmdPROPERTY="$cmdTEMP | cut -d':' -f 1 | tr ' ' '-' | tr '[:upper:]' '[:lower:]'"
	cmdVALUE="$cmdTEMP | cut -d':' -f 2"
	PROPERTY=$(eval $cmdPROPERTY)
	VALUE=$(eval $cmdVALUE)
	echo -en "\"$PROPERTY\": " >> temp.file
	echo -en \"$VALUE\" >> temp.file
	if [ $i != $# ]; then
		echo -en ", " >> temp.file
	fi	
done

echo " }"  >> temp.file