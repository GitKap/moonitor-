#!/bin/bash
echo -en "cpuinfo:"
cat /proc/cpuinfo  | grep "model name" | head -n 1	| awk '{ for(i=4;i<=NF;i++) printf $(i) " " }'      
echo                                                                             
