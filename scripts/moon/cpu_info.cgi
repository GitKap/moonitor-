#!/bin/bash

echo Content-type: text/plain
echo

cat /proc/cpuinfo  | grep "model name" | awk '{ for(i=4;i<=NF;i++) printf $(i) " " }'                                                                                   
